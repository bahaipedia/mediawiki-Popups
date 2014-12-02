( function ( $, mw ) {

	QUnit.module( 'ext.popups' );
	QUnit.test( 'render.article.getProcessedElements', function ( assert ) {
		QUnit.expect( 9 );

		function test ( extract, title, expected, msg ) {
			var $div = $( '<div>' ).append(
				mw.popups.render.article.getProcessedElements( extract, title )
			);
			assert.equal( $div.html(), expected, msg );
		}

		test(
			'Isaac Newton was born in', 'Isaac Newton',
			'<b>Isaac Newton</b> was born in',
			'Title as first word'
		);

		test(
			'The C* language not to be confused with C# or C', 'C*',
			'The <b>C*</b> language not to be confused with C# or C',
			'Title containing *'
		);

		test(
			'Person (was born in Location) is good', 'Person',
			'<b>Person</b> is good',
			'Extract with text in parentheses'
		);

		test(
			'Person (was born in Location (at Time)) is good', 'Person',
			'<b>Person</b> is good',
			'Extract with nested parentheses'
		);

		test(
			'Person (was born in Location (at Time) ) is good', 'Person',
			'<b>Person</b> is good',
			'Extract with nested parentheses and random spaces'
		);

		test(
			'Brackets ) are funny ( when not used properly', 'Brackets',
			'<b>Brackets</b> ) are funny ( when not used properly',
			'Extract with unbalanced parentheses'
		);

		test(
			'Epic XSS <script>alert("XSS")</script> is epic', 'Epic XSS',
			'<b>Epic XSS</b> &lt;script&gt;alert&lt;/script&gt; is epic',
			'XSS Attack'
		);

		test(
			'Foo\'s pub is a pub in Bar', 'Foo\'s pub',
			'<b>Foo&amp;#039;s pub</b> is a pub in Bar',
			'Correct escaping'
		);

		test(
			'*Testing if Things are correctly identified', 'Things',
			'*Testing if <b>Things</b> are correctly identified',
			'Article that begins with asterisk'
		);

	} );

} ) ( jQuery, mediaWiki );
