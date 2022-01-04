/**
 * @module title
 */

/**
 * Fast, native check if we are parsing a self-link, with the only difference beeing the hash.
 *
 * @param {HTMLAnchorElement} el
 * @return {boolean}
 */
function isOwnPageAnchorLink( el ) {
	return el.hash &&
		// Note: The protocol is ignored for the sake of simplicity.
		// Can't compare username and password because they aren't readable from `location`.
		el.host === location.host &&
		el.pathname === location.pathname &&
		el.search === location.search;
}

/**
 * Gets the title of a local page from an href given some configuration.
 *
 * @param {HTMLAnchorElement} link
 * @param {mw.Map} config
 * @return {Object|undefined}
 */
export function getTitleInfo( link, config ) {
	// Skip every URI that mw.Uri cannot parse
	let linkHref;
	try {
		linkHref = new mw.Uri( link.href );
	} catch ( e ) {
		return undefined;
	}

	if ( link.classList && link.classList.contains( 'extiw' ) ) {
		const $link = $( link );

		let foreignInfo = $link.data( 'foreignTitleInfo' );
		if ( !foreignInfo ) {
			// Interwiki link.
			const titleParts = link.title.split( ':' ),
				interwikiPrefix = titleParts.shift(),
				foreignTitle = titleParts.join( ':' ),
				foreignApiUrl = config.get( 'wgPopupsForeignApiUrls' )[ interwikiPrefix ];

			if ( foreignApiUrl ) {
				foreignInfo = { title: foreignTitle, apiUrl: foreignApiUrl };
			} else {
				// We don't know the API endpoint for this external wiki.
				foreignInfo = false;
			}

			// Save to cache, because Popups is blanking "title" attribute while the popup is shown,
			// so we wouldn't be able to calculate this from within "mouseout" event handler.
			$link.data( 'foreignTitleInfo', foreignInfo );
		}

		return foreignInfo;
	}

	// External links
	if ( linkHref.host !== location.hostname ) {
		return undefined;
	}

	const queryLength = Object.keys( linkHref.query ).length;
	let title;

	// No query params (pretty URL)
	if ( !queryLength ) {
		const pattern = mw.util.escapeRegExp( config.get( 'wgArticlePath' ) ).replace( '\\$1', '([^?#]+)' ),
			matches = new RegExp( pattern ).exec( linkHref.path );

		// We can't be sure decodeURIComponent() is able to parse every possible match
		try {
			title = matches && decodeURIComponent( matches[ 1 ] );
		} catch ( e ) {
			// Will return undefined below
		}
	} else if ( queryLength === 1 && 'title' in linkHref.query ) {
		// URL is not pretty, but only has a `title` parameter
		title = linkHref.query.title;
	}

	if ( !title ) {
		return undefined;
	}

	return {
		title: `${title}${linkHref.fragment ? `#${linkHref.fragment}` : ''}`
	};
}

/**
 * Given a page title it will return the mediawiki.Title if it is an eligible
 * link for showing page previews, null otherwise
 *
 * @param {string|undefined} title page title to check if it should show preview
 * @param {number[]} contentNamespaces contentNamespaces as specified in
 * wgContentNamespaces
 * @return {mw.Title|null}
 */
export function isValid( title, contentNamespaces ) {
	if ( !title ) {
		return null;
	}

	// Is title in a content namespace?
	const mwTitle = mw.Title.newFromText( title );
	if ( mwTitle && contentNamespaces.indexOf( mwTitle.namespace ) >= 0 ) {
		return mwTitle;
	}

	return null;
}

/**
 * Return an mw.Title from an HTMLAnchorElement if valid for page previews. Convenience
 * method
 *
 * @param {HTMLAnchorElement} el
 * @param {mw.Map} config
 * @return {Object|null} Contains: 1) "mwTitle" field of type mw.Title,
 * 2) optional "apiUrl" field (string).
 */
export function fromElement( el, config ) {
	if ( isOwnPageAnchorLink( el ) ) {
		// No need to check the namespace. A self-link can't point to different one.
		try {
			return {
				mwTitle: mw.Title.newFromText( config.get( 'wgPageName' ) + decodeURIComponent( el.hash ) )
			};
		} catch ( e ) {
			return null;
		}
	}

	const titleInfo = getTitleInfo( el, config );
	if ( !titleInfo ) {
		return null;
	}

	let mwTitle;

	if ( titleInfo.apiUrl ) {
		// For interwiki links, we don't know or care to know the namespaces it has,
		// so assume that link is always valid.
		mwTitle = mw.Title.newFromText( titleInfo.title );
	} else {
		mwTitle = isValid( titleInfo.title, config.get( 'wgContentNamespaces' ) );
	}

	if ( !mwTitle ) {
		return null;
	}

	titleInfo.mwTitle = mwTitle;
	return titleInfo;
}
