/*@nomin*/
!function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s="./src/index.js")}({"./node_modules/redux-thunk/dist/redux-thunk.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,i=t.getState;return function(t){return function(r){return"function"==typeof r?r(n,i,e):t(r)}}}}t.__esModule=!0;var i=n();i.withExtraArgument=n,t.default=i}])})},"./node_modules/redux/dist/redux.min.js":function(e,t,n){!function(t,n){e.exports=n()}(0,function(){return function(e){function t(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return e[i].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var r=n(2),o=i(r),s=n(7),a=i(s),u=n(6),c=i(u),p=n(5),l=i(p),d=n(1),f=i(d);i(n(3)),t.createStore=o.default,t.combineReducers=a.default,t.bindActionCreators=c.default,t.applyMiddleware=l.default,t.compose=f.default},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};if(1===t.length)return t[0];var i=t[t.length-1],r=t.slice(0,-1);return function(){return r.reduceRight(function(e,t){return t(e)},i.apply(void 0,arguments))}}t.__esModule=!0,t.default=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){function i(){w===v&&(w=v.slice())}function o(){return h}function a(e){if("function"!=typeof e)throw Error("Expected listener to be a function.");var t=!0;return i(),w.push(e),function(){if(t){t=!1,i();var n=w.indexOf(e);w.splice(n,1)}}}function p(e){if(!(0,s.default)(e))throw Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(m)throw Error("Reducers may not dispatch actions.");try{m=!0,h=g(h,e)}finally{m=!1}for(var t=v=w,n=0;t.length>n;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw Error("Expected the nextReducer to be a function.");g=e,p({type:c.INIT})}function d(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(o())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[u.default]=function(){return this},e}var f;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw Error("Expected the enhancer to be a function.");return n(r)(e,t)}if("function"!=typeof e)throw Error("Expected the reducer to be a function.");var g=e,h=t,v=[],w=v,m=!1;return p({type:c.INIT}),f={dispatch:p,subscribe:a,getState:o,replaceReducer:l},f[u.default]=d,f}t.__esModule=!0,t.ActionTypes=void 0,t.default=r;var o=n(4),s=i(o),a=n(12),u=i(a),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw Error(e)}catch(e){}}t.__esModule=!0,t.default=n},function(e,t,n){function i(e){if(!s(e)||f.call(e)!=a||o(e))return!1;var t=r(e);if(null===t)return!0;var n=l.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&p.call(n)==d}var r=n(8),o=n(9),s=n(11),a="[object Object]",u=Function.prototype,c=Object.prototype,p=u.toString,l=c.hasOwnProperty,d=p.call(Object),f=c.toString;e.exports=i},function(e,t,n){"use strict";function i(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,i,o){var a=e(n,i,o),u=a.dispatch,c=[],p={getState:a.getState,dispatch:function(e){return u(e)}};return c=t.map(function(e){return e(p)}),u=s.default.apply(void 0,c)(a.dispatch),r({},a,{dispatch:u})}}}t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=i;var o=n(1),s=function(e){return e&&e.__esModule?e:{default:e}}(o)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function i(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var i=Object.keys(e),r={},o=0;i.length>o;o++){var s=i[o],a=e[s];"function"==typeof a&&(r[s]=n(a,t))}return r}t.__esModule=!0,t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=t&&t.type;return"Given action "+(n&&'"'+n+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function o(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:a.ActionTypes.INIT}))throw Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+a.ActionTypes.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}function s(e){for(var t=Object.keys(e),n={},i=0;t.length>i;i++){var s=t[i];"function"==typeof e[s]&&(n[s]=e[s])}var a,u=Object.keys(n);try{o(n)}catch(e){a=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(a)throw a;for(var i=!1,o={},s=0;u.length>s;s++){var c=u[s],p=n[c],l=e[c],d=p(l,t);if(void 0===d){var f=r(c,t);throw Error(f)}o[c]=d,i=i||d!==l}return i?o:e}}t.__esModule=!0,t.default=s;var a=n(2);i((i(n(4)),n(3)))},function(e,t,n){var i=n(10),r=i(Object.getPrototypeOf,Object);e.exports=r},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}e.exports=n},function(e,t){function n(e,t){return function(n){return e(t(n))}}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){e.exports=n(13)},function(e,t,n){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(14),r=function(e){return e&&e.__esModule?e:{default:e}}(i),o=void 0;void 0!==e?o=e:"undefined"!=typeof window&&(o=window);var s=(0,r.default)(o);t.default=s}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n}])})},"./src/actionTypes.js":function(e,t){e.exports={BOOT:"BOOT",LINK_DWELL:"LINK_DWELL",ABANDON_START:"ABANDON_START",ABANDON_END:"ABANDON_END",LINK_CLICK:"LINK_CLICK",FETCH_START:"FETCH_START",FETCH_END:"FETCH_END",FETCH_COMPLETE:"FETCH_COMPLETE",FETCH_FAILED:"FETCH_FAILED",PREVIEW_DWELL:"PREVIEW_DWELL",PREVIEW_SHOW:"PREVIEW_SHOW",PREVIEW_CLICK:"PREVIEW_CLICK",SETTINGS_SHOW:"SETTINGS_SHOW",SETTINGS_HIDE:"SETTINGS_HIDE",SETTINGS_CHANGE:"SETTINGS_CHANGE",EVENT_LOGGED:"EVENT_LOGGED",STATSV_LOGGED:"STATSV_LOGGED"}},"./src/actions.js":function(e,t,n){function i(e){return e.timestamp=o.now(),e}var r=jQuery,o=window.mediaWiki,s={},a=n("./src/actionTypes.js"),u=n("./src/wait.js");s.boot=function(e,t,n,i,r){var o=r.get("wgUserEditCount"),s=n.getPreviewCount();return{type:a.BOOT,isEnabled:e,isNavPopupsEnabled:r.get("wgPopupsConflictsWithNavPopupGadget"),sessionToken:t.sessionId(),pageToken:i(),page:{title:r.get("wgTitle"),namespaceID:r.get("wgNamespaceNumber"),id:r.get("wgArticleId")},user:{isAnon:t.isAnon(),editCount:o,previewCount:s}}},s.fetch=function(e,t,n){var o=r(t).data("page-previews-title"),s=o.getPrefixedText(),c=o.namespace;return function(o){var p;o(i({type:a.FETCH_START,el:t,title:s,namespaceID:c})),p=e.getPageSummary(s).then(function(e){return o(i({type:a.FETCH_END,el:t})),e}).fail(function(){o({type:a.FETCH_FAILED,el:t})}),r.when(p,u(350)).then(function(e){o(i({type:a.FETCH_COMPLETE,el:t,result:e,token:n}))})}},s.linkDwell=function(e,t,n,o){var c=o(),p=r(e).data("page-previews-title"),l=p.getPrefixedText(),d=p.namespace;return function(r,o){function p(){return o().preview.activeToken===c}var f=i({type:a.LINK_DWELL,el:e,event:t,token:c,title:l,namespaceID:d});r(f),p()&&u(150).then(function(){o().preview.enabled&&p()&&r(s.fetch(n,e,c))})}},s.abandon=function(){return function(e,t){var n=t().preview.activeToken;n&&(e(i({type:a.ABANDON_START,token:n})),u(300).then(function(){e({type:a.ABANDON_END,token:n})}))}},s.linkClick=function(e){return i({type:a.LINK_CLICK,el:e})},s.previewDwell=function(){return{type:a.PREVIEW_DWELL}},s.previewShow=function(e){return i({type:a.PREVIEW_SHOW,token:e})},s.showSettings=function(){return{type:a.SETTINGS_SHOW}},s.hideSettings=function(){return{type:a.SETTINGS_HIDE}},s.saveSettings=function(e){return function(t,n){t({type:a.SETTINGS_CHANGE,wasEnabled:n().preview.enabled,enabled:e})}},s.eventLogged=function(e){return{type:a.EVENT_LOGGED,event:e}},s.statsvLogged=function(){return{type:a.STATSV_LOGGED}},e.exports=s},"./src/changeListener.js":function(e,t){e.exports=function(e,t){var n;e.subscribe(function(){var i=n;n=e.getState(),i!==n&&t(i,n)})}},"./src/changeListeners/eventLogging.js":function(e,t){function n(e){var t=2166136261,n=0;for(n=0;n<e.length;++n)t^=e.charCodeAt(n),t*=16777619;return t>>>0}var i=jQuery;e.exports=function(e,t,r){var o={},s={};return function(a,u){var c,p,l=u.eventLogging,d=l.event,f=!0;d&&(c=d.linkInteractionToken,!0===o[c]&&(r("counter.PagePreviews.EventLogging.DuplicateToken",1),f=!1),o[c]=!0,p=n(JSON.stringify(d)).toString(16),!0===s[p]&&(r("counter.PagePreviews.EventLogging.DuplicateEvent",1),f=!1),s[p]=!0,d=i.extend(!0,{},l.baseData,d),f&&t.log(d),e.eventLogged(d))}}},"./src/changeListeners/footerLink.js":function(e,t){function n(){var e,t=r("<li>").append(r("<a>").attr("href","#").text(i.message("popups-settings-enable").text()));return t.hide(),e=r("#footer-places, #f-list"),0===e.length&&(e=r("#footer li").parent()),e.append(t),t}var i=window.mediaWiki,r=jQuery;e.exports=function(e){var t;return function(i,r){void 0===t&&(t=n(),t.click(function(t){t.preventDefault(),e.showSettings()})),r.settings.shouldShowFooterLink?t.show():t.hide()}}},"./src/changeListeners/index.js":function(e,t,n){e.exports={footerLink:n("./src/changeListeners/footerLink.js"),eventLogging:n("./src/changeListeners/eventLogging.js"),linkTitle:n("./src/changeListeners/linkTitle.js"),render:n("./src/changeListeners/render.js"),settings:n("./src/changeListeners/settings.js"),statsv:n("./src/changeListeners/statsv.js"),syncUserSettings:n("./src/changeListeners/syncUserSettings.js")}},"./src/changeListeners/linkTitle.js":function(e,t){var n=jQuery;e.exports=function(){function e(e){var t=n(e);i||(i=t.attr("title"),t.attr("title",""))}function t(e){n(e).attr("title",i),i=void 0}var i;return function(n,i){var r=n&&n.preview.activeLink;i.preview.enabled&&(r&&n.preview.activeLink!==i.preview.activeLink&&t(n.preview.activeLink),i.preview.activeLink&&e(i.preview.activeLink))}}},"./src/changeListeners/render.js":function(e,t,n){var i=n("./src/renderer.js");e.exports=function(e){var t;return function(n,r){r.preview.shouldShow&&!t?(t=i.render(r.preview.fetchResponse),t.show(r.preview.activeEvent,e,r.preview.activeToken)):!r.preview.shouldShow&&t&&(t.hide(),t=void 0)}}},"./src/changeListeners/settings.js":function(e,t){e.exports=function(e,t){var n;return function(i,r){i&&(!1===i.settings.shouldShow&&!0===r.settings.shouldShow?(n||(n=t(e),n.appendTo(document.body)),n.setEnabled(r.preview.enabled),n.show()):!0===i.settings.shouldShow&&!1===r.settings.shouldShow&&n.hide(),i.settings.showHelp!==r.settings.showHelp&&n.toggleHelp(r.settings.showHelp))}}},"./src/changeListeners/statsv.js":function(e,t){e.exports=function(e,t){return function(n,i){var r=i.statsv;r.action&&(t(r.action,r.data),e.statsvLogged())}}},"./src/changeListeners/syncUserSettings.js":function(e,t){function n(e,t,n){return e[t]&&e[t][n]}function i(e,t,i,r,o){var s=n(t,i,r);e&&n(e,i,r)!==s&&o(s)}e.exports=function(e){return function(t,n){i(t,n,"eventLogging","previewCount",e.setPreviewCount),i(t,n,"preview","enabled",e.setIsEnabled)}}},"./src/constants.js":function(e,t){e.exports={THUMBNAIL_SIZE:300*$.bracketedDevicePixelRatio(),EXTRACT_LENGTH:525}},"./src/counts.js":function(e,t){function n(e){var t;return 0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=99?t="5-99":e>=100&&e<=999?t="100-999":e>=1e3&&(t="1000+"),t+" edits"}function i(e){var t;return-1===e?"unknown":(0===e?t="0":e>=1&&e<=4?t="1-4":e>=5&&e<=20?t="5-20":e>=21&&(t="21+"),t+" previews")}e.exports={getPreviewCountBucket:i,getEditCountBucket:n}},"./src/gateway/mediawiki.js":function(e,t,n){function i(e,t){function n(n){return e.get({action:"query",prop:"info|extracts|pageimages|revisions|info",formatversion:2,redirects:!0,exintro:!0,exchars:t.EXTRACT_LENGTH,explaintext:!0,piprop:"thumbnail",pithumbsize:t.THUMBNAIL_SIZE,pilicense:"any",rvprop:"timestamp",inprop:"url",titles:n,smaxage:s,maxage:s,uselang:"content"},{headers:{"X-Analytics":"preview=1"}})}function i(e){return n(e).then(r).then(o)}return{fetch:n,extractPageFromResponse:r,convertPageToModel:o,getPageSummary:i}}function r(e){if(e.query&&e.query.pages&&e.query.pages.length)return e.query.pages[0];throw new Error("API response `query.pages` is empty.")}function o(e){return a(e.title,e.canonicalurl,e.pagelanguagehtmlcode,e.pagelanguagedir,e.extract,e.thumbnail)}var s=300,a=n("./src/preview/model.js").createModel;e.exports=i},"./src/gateway/rest.js":function(e,t,n){function i(e,t){function n(t){return e({url:s+encodeURIComponent(t),headers:{Accept:'application/json; charset=utf-8profile="'+a+'"'}})}function i(e){var i=p.Deferred();return n(e).then(function(e){i.resolve(o(e,t.THUMBNAIL_SIZE))},function(t){404===t.status?i.resolve(o({title:e,lang:"",dir:"",extract:""},0)):i.reject()}),i.promise()}return{fetch:n,convertPageToModel:o,getPageSummary:i}}function r(e,t,n){var i,r,o,s=e.source.split("/"),a=s[s.length-1];return i=a.substr(a.indexOf("px-")+3),e.width>e.height?(r=n,o=Math.floor(n/e.width*e.height)):(r=Math.floor(n/e.height*e.width),o=n),r>=t.width&&-1===i.indexOf(".svg")?t:(s[s.length-1]=r+"px-"+i,{source:s.join("/"),width:r,height:o})}function o(e,t){return u(e.title,new c.Title(e.title).getUrl(),e.lang,e.dir,e.extract,e.thumbnail?r(e.thumbnail,e.originalimage,t):void 0)}var s="/api/rest_v1/page/summary/",a="https://www.mediawiki.org/wiki/Specs/Summary/1.0.0",u=n("./src/preview/model.js").createModel,c=window.mediaWiki,p=jQuery;e.exports=i},"./src/getTitle.js":function(e,t){function n(e,t){var n,r,o,s=new RegExp(i.RegExp.escape(t.get("wgArticlePath")).replace("\\$1","(.+)"));try{n=new i.Uri(e)}catch(e){return}if(n.host===location.hostname)return o=Object.keys(n.query).length,o?1===o&&n.query.hasOwnProperty("title")?n.query.title:void 0:(r=s.exec(n.path),r?decodeURIComponent(r[1]):void 0)}var i=window.mediaWiki;e.exports=n},"./src/index.js":function(e,t,n){function i(e){return e.get("wgPopupsAPIUseRESTBase")?l(a.ajax,p):d(new s.Api,p)}function r(e,t,n){return y.isEnabled(e,t,n)?s.track:a.noop}function o(e,t,n,i,r,o){w(e,b.footerLink(t)),w(e,b.linkTitle()),w(e,b.render(r)),w(e,b.statsv(t,o)),w(e,b.syncUserSettings(n)),w(e,b.settings(t,i))}var s=mediaWiki,a=jQuery,u=n("./node_modules/redux/dist/redux.min.js"),c=n("./node_modules/redux-thunk/dist/redux-thunk.min.js"),p=n("./src/constants.js"),l=n("./src/gateway/rest.js"),d=n("./src/gateway/mediawiki.js"),f=n("./src/userSettings.js"),g=n("./src/previewBehavior.js"),h=n("./src/schema.js"),v=n("./src/settingsDialog.js"),w=n("./src/changeListener.js"),m=n("./src/isEnabled.js"),T=n("./src/processLinks.js"),E=n("./src/renderer.js"),y=n("./src/statsvInstrumentation.js"),b=n("./src/changeListeners/index.js"),x=n("./src/actions.js"),S=n("./src/reducers/index.js"),k=[".extiw",".image",".new",".internal",".external",".oo-ui-buttonedElement-button",".cancelLink a"];s.requestIdleCallback(function(){var e,t,n,a,p,l,d,y,_=u.compose,I=s.user.generateRandomSessionId,L=i(s.config);n=f(s.storage),a=v(),p=r(s.user,s.config,s.experiments),l=m(s.user,n,s.config,s.experiments),!0===s.config.get("debug")&&(_=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_),e=u.createStore(u.combineReducers(S),_(u.applyMiddleware(c.default))),t=u.bindActionCreators(x,e.dispatch),y=g(s.config,s.user,t),o(e,t,n,a,y,p),s.loader.using("ext.eventLogging.Schema").done(function(){d=h(s.config,window),w(e,b.eventLogging(t,d,p))}),t.boot(l,s.user,n,I,s.config),s.hook("wikipage.content").add(function(e){var n=T(e,k,s.config);E.init(),n.on("mouseover keyup",function(e){t.linkDwell(this,e,L,I)}).on("mouseout blur",function(){t.abandon(this)}).on("click",function(){t.linkClick(this)})})}),window.Redux=u,window.ReduxThunk=c},"./src/isEnabled.js":function(e,t){function n(e,t,n){var i=t.get("wgPopupsAnonsEnabledSamplingRate",.9);return"A"===n.getBucket({name:"ext.Popups.visibility",enabled:!0,buckets:{control:1-i,A:i}},e.sessionId())}e.exports=function(e,t,i,r){return!i.get("wgPopupsConflictsWithNavPopupGadget")&&(e.isAnon()?!i.get("wgPopupsBetaFeature")&&(t.hasIsEnabled()?t.getIsEnabled():n(e,i,r)):i.get("wgPopupsShouldSendModuleToUser"))}},"./src/preview/model.js":function(e,t){function n(e){var t;if(void 0!==e&&""!==e)return t=e,t=r(t),t=i(t),t.length>0?t:void 0}function i(e){return e.replace(/\.\.\.$/,"")}function r(e){var t,n="",i=0,r=0;for(r;r<e.length;r++){if(")"===(t=e.charAt(r))&&0===i)return e;if("("!==t)if(")"!==t){if(0===i){if(" "===t&&"("===e.charAt(r+1))continue;n+=t}}else i--;else i++}return 0===i?n:e}t.TYPE_GENERIC="generic",t.TYPE_PAGE="page",t.createModel=function(e,t,i,r,o,s){var a=n(o);return{title:e,url:t,languageCode:i,languageDirection:r,extract:a,type:void 0===a?"generic":"page",thumbnail:s}}},"./src/previewBehavior.js":function(e,t){var n=window.mediaWiki,i=jQuery;e.exports=function(e,t,r){var o,s,a=e.get("wgPopupsBetaFeature"),u=i.noop;return t.isAnon()?u=function(e){e.preventDefault(),r.showSettings()}:(o="Special:Preferences#mw-prefsection-",o+=a?"betafeatures":"rendering",s=n.Title.newFromText(o).getUrl()),{settingsUrl:s,showSettings:u,previewDwell:r.previewDwell,previewAbandon:r.abandon,previewShow:r.previewShow,click:r.linkClick}}},"./src/processLinks.js":function(e,t,n){function i(e,t,n){var i;return i=n.get("wgContentNamespaces"),e.find("a[href][title]:not("+t.join(", ")+")").filter(function(){var e,t=s(this.href,n);return!!t&&(e=r.Title.newFromText(t),e&&o.inArray(e.namespace,i)>=0?(o(this).data({"page-previews-title":e}),!0):void 0)})}var r=window.mediaWiki,o=jQuery,s=n("./src/getTitle.js");e.exports=i},"./src/reducers/eventLogging.js":function(e,t,n){function i(e){var t={pageTitleSource:e.page.title,namespaceIdSource:e.page.namespaceID,pageIdSource:e.page.id,isAnon:e.user.isAnon,popupEnabled:e.isEnabled,pageToken:e.pageToken,sessionToken:e.sessionToken,previewCountBucket:u.getPreviewCountBucket(e.user.previewCount),hovercardsSuppressedByGadget:e.isNavPopupsEnabled};return e.user.isAnon||(t.editCountBucket=u.getEditCountBucket(e.user.editCount)),t}function r(e,t){return t.linkInteractionToken=e.token,t.pageTitleHover=e.title,t.namespaceIdHover=e.namespaceID,t}function o(e){var t={totalInteractionTime:Math.round(e.finished-e.started)};if(!e.finalized)return void 0!==e.timeToPreviewShow?(t.action="dismissed",t.previewType=e.previewType,t.perceivedWait=e.timeToPreviewShow):t.action="dwelledButAbandoned",r(e,t)}var s=n("./src/actionTypes.js"),a=n("./src/reducers/nextState.js"),u=n("./src/counts.js");e.exports=function(e,t){var n,c,p=[s.FETCH_COMPLETE,s.ABANDON_END,s.PREVIEW_SHOW];if(void 0===e&&(e={previewCount:void 0,baseData:{},interaction:void 0,event:void 0}),-1!==p.indexOf(t.type)&&(!e.interaction||t.token!==e.interaction.token))return e;if(!e.interaction&&t.type!==s.BOOT&&t.type!==s.LINK_DWELL&&t.type!==s.EVENT_LOGGED)return e;switch(t.type){case s.BOOT:return a(e,{previewCount:t.user.previewCount,baseData:i(t),event:{action:"pageLoaded"}});case s.EVENT_LOGGED:return c=a(e,{event:void 0}),t.event.linkInteractionToken&&e.interaction&&t.event.linkInteractionToken===e.interaction.token&&(c.interaction=void 0),c;case s.FETCH_COMPLETE:return a(e,{interaction:a(e.interaction,{previewType:t.result.type})});case s.PREVIEW_SHOW:return n=e.previewCount+1,a(e,{previewCount:n,baseData:a(e.baseData,{previewCountBucket:u.getPreviewCountBucket(n)}),interaction:a(e.interaction,{timeToPreviewShow:Math.round(t.timestamp-e.interaction.started)})});case s.LINK_DWELL:return e.interaction&&t.el===e.interaction.link?a(e,{interaction:a(e.interaction,{isUserDwelling:!0})}):a(e,{interaction:{link:t.el,title:t.title,namespaceID:t.namespaceID,token:t.token,started:t.timestamp,isUserDwelling:!0},event:e.interaction?o(e.interaction):void 0});case s.PREVIEW_DWELL:return a(e,{interaction:a(e.interaction,{isUserDwelling:!0})});case s.LINK_CLICK:return a(e,{interaction:a(e.interaction,{finalized:!0}),event:r(e.interaction,{action:"opened",totalInteractionTime:Math.round(t.timestamp-e.interaction.started)})});case s.ABANDON_START:return a(e,{interaction:a(e.interaction,{finished:t.timestamp,isUserDwelling:!1})});case s.ABANDON_END:return e.interaction.isUserDwelling?e:a(e,{interaction:void 0,event:o(e.interaction)});case s.SETTINGS_SHOW:return a(e,{event:{action:"tapped settings cog"}});default:return e}}},"./src/reducers/index.js":function(e,t,n){e.exports={eventLogging:n("./src/reducers/eventLogging.js"),preview:n("./src/reducers/preview.js"),settings:n("./src/reducers/settings.js"),statsv:n("./src/reducers/statsv.js")}},"./src/reducers/nextState.js":function(e,t){e.exports=function(e,t){var n,i={};for(n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(i[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i}},"./src/reducers/preview.js":function(e,t,n){var i=n("./src/actionTypes.js"),r=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(void 0===e&&(e={enabled:void 0,activeLink:void 0,activeEvent:void 0,activeToken:"",shouldShow:!1,isUserDwelling:!1}),t.type){case i.BOOT:return r(e,{enabled:t.isEnabled});case i.SETTINGS_CHANGE:return r(e,{enabled:t.enabled});case i.LINK_DWELL:return t.el!==e.activeLink?r(e,{activeLink:t.el,activeEvent:t.event,activeToken:t.token,shouldShow:!1,isUserDwelling:!0}):r(e,{isUserDwelling:!0});case i.ABANDON_END:return t.token!==e.activeToken||e.isUserDwelling?e:r(e,{activeLink:void 0,activeToken:void 0,activeEvent:void 0,fetchResponse:void 0,shouldShow:!1});case i.PREVIEW_DWELL:return r(e,{isUserDwelling:!0});case i.ABANDON_START:return r(e,{isUserDwelling:!1});case i.FETCH_START:return r(e,{fetchResponse:void 0});case i.FETCH_COMPLETE:if(t.token===e.activeToken)return r(e,{fetchResponse:t.result,shouldShow:e.isUserDwelling});default:return e}}},"./src/reducers/settings.js":function(e,t,n){var i=n("./src/actionTypes.js"),r=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(void 0===e&&(e={shouldShow:!1,showHelp:!1,shouldShowFooterLink:!1}),t.type){case i.SETTINGS_SHOW:return r(e,{shouldShow:!0,showHelp:!1});case i.SETTINGS_HIDE:return r(e,{shouldShow:!1,showHelp:!1});case i.SETTINGS_CHANGE:return t.wasEnabled===t.enabled?r(e,{shouldShow:!1}):r(e,{shouldShow:!t.enabled,showHelp:!t.enabled,shouldShowFooterLink:!t.enabled});case i.BOOT:return r(e,{shouldShowFooterLink:t.user.isAnon&&!t.isEnabled});default:return e}}},"./src/reducers/statsv.js":function(e,t,n){var i=n("./src/actionTypes.js"),r=n("./src/reducers/nextState.js");e.exports=function(e,t){switch(e=e||{},t.type){case i.FETCH_START:return r(e,{fetchStartedAt:t.timestamp});case i.FETCH_END:return r(e,{action:"timing.PagePreviewsApiResponse",data:t.timestamp-e.fetchStartedAt});case i.FETCH_FAILED:return r(e,{action:"counter.PagePreviewsApiFailure",data:1});case i.LINK_DWELL:return r(e,{linkDwellStartedAt:t.timestamp});case i.PREVIEW_SHOW:return r(e,{action:"timing.PagePreviewsPreviewShow",data:t.timestamp-e.linkDwellStartedAt});case i.STATSV_LOGGED:return r(e,{action:null,data:null});default:return e}}},"./src/renderer.js":function(e,t,n){function i(e){T("<div>").attr("id","mwe-popups-svg").html('<svg width="0" height="0"><defs><clippath id="mwe-popups-mask"><polygon points="0 8, 10 8, 18 0, 26 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-mask-flip"><polygon points="0 8, 274 8, 282 0, 290 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask"><polygon points="0 8, 174 8, 182 0, 190 8, 1000 8, 1000 1000, 0 1000"/></clippath><clippath id="mwe-popups-landscape-mask-flip"><polygon points="0 0, 1000 0, 1000 242, 190 242, 182 250, 174 242, 0 242"/></clippath></defs></svg>').appendTo(e)}function r(){i(document.body)}function o(e){var t=void 0===e.extract?a(e):s(e);return{show:function(e,n,i){return c(t,e,T(e.target),n,i,document.body)},hide:function(){return l(t)}}}function s(e){var t,n,i=d(e.thumbnail),r=null!==i,o=u(e.extract,e.title);return t=T.extend({},e,{hasThumbnail:r}),n=m.template.get("ext.popups","preview.mustache").render(t),r&&n.find(".mwe-popups-discreet").append(i.el),o.length&&n.find(".mwe-popups-extract").append(o),{el:n,hasThumbnail:r,thumbnail:i,isTall:r&&i.isTall}}function a(e){var t,n;return t=T.extend({},e,{extractMsg:m.msg("popups-preview-no-preview"),readMsg:m.msg("popups-preview-footer-read")}),n=m.template.get("ext.popups","preview-empty.mustache").render(t),{el:n,hasThumbnail:!1,isTall:!1}}function u(e,t){var n,i,r=[],o="<bi-"+Math.random()+">",s="<snip-"+Math.random()+">";return t=t.replace(/\s+/g," ").trim(),i=m.RegExp.escape(t),n=new RegExp("(^|\\s)("+i+")(|$)","i"),e=e.replace(/\s+/," "),e=e.replace(n,"$1"+s+o+"$2"+s+"$3"),e=e.split(s),T.each(e,function(e,t){0===t.indexOf(o)?r.push(T("<b>").text(t.substring(o.length))):r.push(document.createTextNode(t))}),r}function c(e,t,n,i,r,o){var s=g(e.isTall,{pageX:t.pageX,pageY:t.pageY,clientY:t.clientY},{clientRects:n.get(0).getClientRects(),offset:n.offset(),width:n.width(),height:n.height()},{scrollTop:b.scrollTop(),width:b.width(),height:b.height()},y.pokeySize);return e.el.appendTo(o),v(e,s,h(e,s),y.landscapeImage.h,y.pokeySize),e.el.show(),E(200).then(function(){p(e,i)}).then(function(){i.previewShow(r)})}function p(e,t){e.el.hover(t.previewDwell,t.previewAbandon),e.el.click(t.click),e.el.find(".mwe-popups-settings-icon").attr("href",t.settingsUrl).click(function(e){e.stopPropagation(),t.showSettings(e)})}function l(e){var t,n;return t=e.el.hasClass("mwe-popups-fade-in-up")?"mwe-popups-fade-in-up":"mwe-popups-fade-in-down",n="mwe-popups-fade-in-up"===t?"mwe-popups-fade-out-down":"mwe-popups-fade-out-up",e.el.removeClass(t).addClass(n),E(150).then(function(){e.el.remove()})}function d(e){var t,n,i,r,o,s,a,u,c=T.bracketedDevicePixelRatio();return e?(t=e.width<e.height,n=e.width/c,i=e.height/c,!t&&n<y.landscapeImage.w||t&&i<y.portraitImage.h||e.source.indexOf("\\")>-1||e.source.indexOf("'")>-1||e.source.indexOf('"')>-1?null:(t?(r=n>y.portraitImage.w?(n-y.portraitImage.w)/-2:y.portraitImage.w-n,o=i>y.portraitImage.h?(i-y.portraitImage.h)/-2:0,s=y.portraitImage.w,a=y.portraitImage.h):(r=0,o=i>y.landscapeImage.h?(i-y.landscapeImage.h)/-2:0,s=y.landscapeImage.w+3,a=i>y.landscapeImage.h?y.landscapeImage.h:i,u="mwe-popups-mask"),{el:f(t?"mwe-popups-is-tall":"mwe-popups-is-not-tall",e.source,r,o,n,i,s,a,u),isTall:t,width:n,height:i})):null}function f(e,t,n,i,r,o,s,a,u){var c,p="http://www.w3.org/2000/svg";return c=T(document.createElementNS(p,"image")),c[0].setAttributeNS("http://www.w3.org/1999/xlink","href",t),c.addClass(e).attr({x:n,y:i,width:r,height:o,"clip-path":"url(#"+u+")"}),T(document.createElementNS(p,"svg")).attr({xmlns:p,width:s,height:a}).append(c)}function g(e,t,n,i,r){var o=!1,s=!1,a=t.pageY?w(t.pageY-i.scrollTop,n.clientRects,!1)+i.scrollTop+r:n.offset.top+n.height+r,u=t.clientY?t.clientY:a,c=t.pageX?t.pageX:n.offset.left;return c>i.width/2&&(c+=t.pageX?0:n.width,c-=e?y.landscapePopupWidth:y.portraitPopupWidth,o=!0),t.pageX&&(c+=o?20:-20),u>i.height/2&&(s=!0,a=n.offset.top,t.pageY&&(a=w(t.pageY-i.scrollTop,n.clientRects,!0)+i.scrollTop),a-=r),{offset:{top:a,left:c},flippedX:o,flippedY:s}}function h(e,t){var n=[];return t.flippedY?n.push("mwe-popups-fade-in-down"):n.push("mwe-popups-fade-in-up"),t.flippedY&&t.flippedX&&n.push("flipped_x_y"),t.flippedY&&!t.flippedX&&n.push("flipped_y"),t.flippedX&&!t.flippedY&&n.push("flipped_x"),e.hasThumbnail&&!e.isTall||t.flippedY||n.push("mwe-popups-no-image-tri"),!e.hasThumbnail||e.isTall||t.flippedY||n.push("mwe-popups-image-tri"),e.isTall?n.push("mwe-popups-is-tall"):n.push("mwe-popups-is-not-tall"),n}function v(e,t,n,i,r){var o=e.el,s=e.isTall,a=e.hasThumbnail,u=e.thumbnail,c=t.flippedY,p=t.flippedX,l=t.offset.top;!c&&!s&&a&&u.height<i&&o.find(".mwe-popups-extract").css("margin-top",u.height-r),o.addClass(n.join(" ")),c&&(l-=o.outerHeight()),o.css({top:l,left:t.offset.left+"px"}),c&&a&&o.find("image")[0].removeAttribute("clip-path"),c&&p&&a&&s&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask-flip)"),p&&!c&&a&&!s&&o.find("image")[0].setAttribute("clip-path","url(#mwe-popups-mask-flip)"),p&&!c&&a&&s&&o.removeClass("mwe-popups-no-image-tri").find("image")[0].setAttribute("clip-path","url(#mwe-popups-landscape-mask)")}function w(e,t,n){var i,r,o=null;return T.each(t,function(t,s){r=Math.abs(e-s.top+e-s.bottom),(null===o||o>r)&&(o=r,i=n?Math.floor(s.top):Math.ceil(s.bottom))}),i}var m=window.mediaWiki,T=jQuery,E=n("./src/wait.js"),y={portraitImage:{h:250,w:203},landscapeImage:{h:200,w:300},landscapePopupWidth:450,portraitPopupWidth:300,pokeySize:8},b=T(window);e.exports={render:o,init:r,createPokeyMasks:i,createPreview:s,createEmptyPreview:a,bindBehavior:p,show:c,hide:l,createThumbnail:d,createThumbnailElement:f,renderExtract:u,createLayout:g,getClasses:h,layoutPreview:v,getClosestYPosition:w}},"./src/schema.js":function(e,t){var n=window.mediaWiki,i=jQuery;e.exports=function(e,t){var r=e.get("wgPopupsSchemaSamplingRate",0);return t.navigator&&i.isFunction(t.navigator.sendBeacon)||(r=0),new n.eventLog.Schema("Popups",r)}},"./src/settingsDialog.js":function(e,t){function n(){var e=s.config.get("wgExtensionAssetsPath")+"/Popups/resources/ext.popups/images/",t=[{id:"simple",name:s.msg("popups-settings-option-simple"),description:s.msg("popups-settings-option-simple-description"),image:e+"hovercard.svg",isChecked:!0},{id:"advanced",name:s.msg("popups-settings-option-advanced"),description:s.msg("popups-settings-option-advanced-description"),image:e+"navpop.svg"},{id:"off",name:s.msg("popups-settings-option-off")}];return o()||t.splice(1,1),s.template.get("ext.popups","settings.mustache").render({heading:s.msg("popups-settings-title"),closeLabel:s.msg("popups-settings-cancel"),saveLabel:s.msg("popups-settings-save"),helpText:s.msg("popups-settings-help"),okLabel:s.msg("popups-settings-help-ok"),descriptionText:s.msg("popups-settings-description"),choices:t})}function i(e){return e.find("input[name=mwe-popups-setting]:checked, #mwe-popups-settings").val()}function r(e,t){var n=a("#mwe-popups-settings");t?(n.find("main, .save, .close").hide(),n.find(".mwe-popups-settings-help, .okay").show()):(n.find("main, .save, .close").show(),n.find(".mwe-popups-settings-help, .okay").hide())}function o(){return"undefined"!=typeof pg&&void 0!==pg.fn.disablePopups}var s=window.mediaWiki,a=jQuery;e.exports=function(){var e,t;return function(s){return e||(e=n(),t=a("<div>").addClass("mwe-popups-overlay"),e.find(".save").click(function(){var t=i(e),n="simple"===t;s.saveSettings(n)}),e.find(".close, .okay").click(s.hideSettings)),{appendTo:function(n){t.appendTo(n),e.appendTo(n)},show:function(){var n=a(window).height(),i=a(window).width();t.show(),e.show().css("left",(i-e.outerWidth(!0))/2).css("top",(n-e.outerHeight(!0))/2)},hide:function(){t.hide(),e.hide()},toggleHelp:function(t){r(e,t)},setEnabled:function(t){var n="off";t?n="simple":o()&&(n="advanced"),e.find("#mwe-popups-settings-"+n).prop("checked",!0)}}}}},"./src/statsvInstrumentation.js":function(e,t){function n(e,t,n){var i=t.get("wgPopupsStatsvSamplingRate",0);return"A"===n.getBucket({name:"ext.Popups.statsv",enabled:!0,buckets:{control:1-i,A:i}},e.sessionId())}e.exports={isEnabled:n}},"./src/userSettings.js":function(e,t){e.exports=function(e){return{getIsEnabled:function(){return"0"!==e.get("mwe-popups-enabled")},setIsEnabled:function(t){e.set("mwe-popups-enabled",t?"1":"0")},hasIsEnabled:function(){var t=e.get("mwe-popups-enabled");return!1!==Boolean(t)},getPreviewCount:function(){var t=e.get("ext.popups.core.previewCount");return!1===t?-1:null===t?0:parseInt(t,10)},setPreviewCount:function(t){e.set("ext.popups.core.previewCount",t.toString())}}}},"./src/wait.js":function(e,t){var n=jQuery;e.exports=function(e){var t=n.Deferred();return setTimeout(function(){t.resolve()},e),t.promise()}}});
//# sourceMappingURL=index.js.map