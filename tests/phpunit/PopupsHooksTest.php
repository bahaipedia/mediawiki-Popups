<?php
/*
 * This file is part of the MediaWiki extension Popups.
 *
 * Popups is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * Popups is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Popups.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @file
 * @ingroup extensions
 */
require_once ( 'PopupsContextTestWrapper.php' );
use Popups\PopupsContext;

/**
 * Integration tests for Page Preview hooks
 *
 * @group Popups
 * @coversDefaultClass  PopupsHooks
 */
class PopupsHooksTest extends MediaWikiTestCase {

	protected function tearDown() {
		PopupsContextTestWrapper::resetTestInstance();
		parent::tearDown();
	}

	/**
	 * @covers ::onGetBetaPreferences
	 */
	public function testOnGetBetaPreferencesBetaDisabled() {
		$prefs = [ 'someNotEmptyValue' => 'notEmpty' ];
		$this->setMwGlobals( [ 'wgPopupsBetaFeature' => false ] );

		PopupsHooks::onGetBetaPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertCount( 1, $prefs );
		$this->assertEquals( 'notEmpty', $prefs[ 'someNotEmptyValue'] );
	}

	/**
	 * @covers ::onGetBetaPreferences
	 */
	public function testOnGetBetaPreferencesBetaEnabled() {
		$prefs = [ 'someNotEmptyValue' => 'notEmpty' ];
		$this->setMwGlobals( [ 'wgPopupsBetaFeature' => true ] );

		PopupsHooks::onGetBetaPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertCount( 2, $prefs );
		$this->assertArrayHasKey( PopupsContext::PREVIEWS_BETA_PREFERENCE_NAME, $prefs );
	}

	/**
	 * @covers ::onGetPreferences
	 */
	public function testOnGetPreferencesPreviewsDisabled() {
		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->disableOriginalConstructor()
			->setMethods( [ 'showPreviewsOptInOnPreferencesPage' ] )
			->getMock();
		$contextMock->expects( $this->once() )
			->method( 'showPreviewsOptInOnPreferencesPage' )
			->will( $this->returnValue( false ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		$prefs = [ 'someNotEmptyValue' => 'notEmpty' ];

		PopupsHooks::onGetPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertCount( 1, $prefs );
		$this->assertEquals( 'notEmpty', $prefs[ 'someNotEmptyValue'] );
	}

	/**
	 * @covers ::onGetPreferences
	 */
	public function testOnGetPreferencesNavPopupGadgetIsOn() {
		$userMock = $this->getTestUser()->getUser();
		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->disableOriginalConstructor()
			->setMethods( [ 'showPreviewsOptInOnPreferencesPage', 'conflictsWithNavPopupsGadget' ] )
			->getMock();

		$contextMock->expects( $this->once() )
			->method( 'showPreviewsOptInOnPreferencesPage' )
			->will( $this->returnValue( true ) );

		$contextMock->expects( $this->once() )
			->method( 'conflictsWithNavPopupsGadget' )
			->with( $userMock )
			->will( $this->returnValue( true ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		$prefs = [];

		PopupsHooks::onGetPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertArrayHasKey( PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME, $prefs );
		$this->assertArrayHasKey( 'disabled',
			$prefs[ PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME ] );
		$this->assertEquals( true,
			$prefs[ PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME]['disabled'] );
		$this->assertNotEmpty( $prefs[ PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME]['help'] );
	}

	/**
	 * @covers ::onGetPreferences
	 */
	public function testOnGetPreferencesPreviewsEnabled() {
		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->disableOriginalConstructor()
			->setMethods( [ 'showPreviewsOptInOnPreferencesPage', 'conflictsWithNavPopupsGadget' ] )
			->getMock();

		$contextMock->expects( $this->once() )
			->method( 'showPreviewsOptInOnPreferencesPage' )
			->will( $this->returnValue( true ) );
		$contextMock->expects( $this->once() )
			->method( 'conflictsWithNavPopupsGadget' )
			->will( $this->returnValue( false ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		$prefs = [
			'skin' => 'skin stuff',
			'someNotEmptyValue' => 'notEmpty',
			'other' => 'notEmpty'
		];

		PopupsHooks::onGetPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertCount( 4, $prefs );
		$this->assertEquals( 'notEmpty', $prefs[ 'someNotEmptyValue'] );
		$this->assertArrayHasKey( PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME, $prefs );
		$this->assertEquals( 1, array_search( \Popups\PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME,
			array_keys( $prefs ) ), ' PagePreviews preferences should be injected after Skin select' );
	}

	/**
	 * @covers ::onGetPreferences
	 */
	public function testOnGetPreferencesPreviewsEnabledWhenSkinIsNotAvailable() {
		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->disableOriginalConstructor()
			->setMethods( [ 'showPreviewsOptInOnPreferencesPage', 'conflictsWithNavPopupsGadget' ] )
			->getMock();

		$contextMock->expects( $this->once() )
			->method( 'showPreviewsOptInOnPreferencesPage' )
			->will( $this->returnValue( true ) );
		$contextMock->expects( $this->once() )
			->method( 'conflictsWithNavPopupsGadget' )
			->will( $this->returnValue( false ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		$prefs = [
			'someNotEmptyValue' => 'notEmpty',
			'other' => 'notEmpty'
		];

		PopupsHooks::onGetPreferences( $this->getTestUser()->getUser(), $prefs );
		$this->assertCount( 3, $prefs );
		$this->assertArrayHasKey( PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME, $prefs );
		$this->assertEquals( 2, array_search( PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME,
			array_keys( $prefs ) ), ' PagePreviews should be injected at end of array' );
	}

	/**
	 * @covers ::onResourceLoaderTestModules
	 */
	public function testOnResourceLoaderTestModules() {
		$testModules = [ 'someNotEmptyValue' => 'notEmpty' ];
		$resourceLoaderMock = $this->getMock( ResourceLoader::class );
		PopupsHooks::onResourceLoaderTestModules( $testModules, $resourceLoaderMock );

		$this->assertCount( 2, $testModules );
		$this->assertEquals( 'notEmpty', $testModules[ 'someNotEmptyValue' ] );
		$this->assertArrayHasKey( 'qunit', $testModules, 'ResourceLoader expects qunit test modules' );
		$this->assertCount( 2, $testModules[ 'qunit' ], 'ResourceLoader expects 2 test modules. ' );
	}

	/**
	 * @covers ::onResourceLoaderGetConfigVars
	 */
	public function testOnResourceLoaderGetConfigVars() {
		$vars = [ 'something' => 'notEmpty' ];
		$value = 10;
		$this->setMwGlobals( [ 'wgPopupsSchemaSamplingRate' => $value ] );
		PopupsHooks::onResourceLoaderGetConfigVars( $vars );
		$this->assertCount( 2, $vars );
		$this->assertEquals( $value, $vars[ 'wgPopupsSchemaSamplingRate' ] );
	}

	/**
	 * @covers PopupsHooks::onUserGetDefaultOptions
	 */
	public function testOnUserGetDefaultOptions() {
		$userOptions = [
			'test' => 'not_empty'
		];
		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->setMethods( [ 'getDefaultIsEnabledState' ] )
			->disableOriginalConstructor()
			->getMock();

		$contextMock->expects( $this->once() )
			->method( 'getDefaultIsEnabledState' )
			->willReturn( true );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );

		PopupsHooks::onUserGetDefaultOptions( $userOptions );
		$this->assertCount( 2, $userOptions );
		$this->assertEquals( true,
			$userOptions[ \Popups\PopupsContext::PREVIEWS_OPTIN_PREFERENCE_NAME ] );
	}

	/**
	 * @covers ::onBeforePageDisplay
	 */
	public function testOnBeforePageDisplayWhenDependenciesAreNotMet() {
		$skinMock = $this->getMock( Skin::class );
		$outPageMock = $this->getMock( OutputPage::class, [ 'addModules' ], [], '', false );
		$outPageMock->expects( $this->never() )
			->method( 'addModules' );
		$loggerMock = $this->getMock( \Psr\Log\LoggerInterface::class );
		$loggerMock->expects( $this->once() )
			->method( 'error' );

		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->disableOriginalConstructor()
			->setMethods( [ 'areDependenciesMet', 'getLogger' ] )
			->getMock();
		$contextMock->expects( $this->once() )
			->method( 'areDependenciesMet' )
			->will( $this->returnValue( false ) );
		$contextMock->expects( $this->once() )
			->method( 'getLogger' )
			->will( $this->returnValue( $loggerMock ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		PopupsHooks::onBeforePageDisplay( $outPageMock, $skinMock );
	}

	/**
	 * @covers ::onBeforePageDisplay
	 */
	public function testOnBeforePageDisplayWhenPagePreviewsAreDisabled() {
		$userMock = $this->getTestUser()->getUser();
		$skinMock = $this->getMock( Skin::class );
		$skinMock->expects( $this->once() )
			->method( 'getUser' )
			->will( $this->returnValue( $userMock ) );

		$outPageMock = $this->getMock( OutputPage::class, [ 'addModules' ], [], '', false );
		$outPageMock->expects( $this->never() )
			->method( 'addModules' );

		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->setMethods( [ 'areDependenciesMet', 'isEnabledByUser' ] )
			->disableOriginalConstructor()
			->getMock();
		$contextMock->expects( $this->once() )
			->method( 'areDependenciesMet' )
			->will( $this->returnValue( true ) );
		$contextMock->expects( $this->once() )
			->method( 'isEnabledByUser' )
			->with( $userMock )
			->will( $this->returnValue( false ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		PopupsHooks::onBeforePageDisplay( $outPageMock, $skinMock );
	}

	/**
	 * @covers ::onBeforePageDisplay
	 */
	public function testOnBeforePageDisplayWhenPagePreviewsAreEnabled() {
		$userMock = $this->getTestUser()->getUser();
		$skinMock = $this->getMock( Skin::class );
		$skinMock->expects( $this->once() )
			->method( 'getUser' )
			->will( $this->returnValue( $userMock ) );

		$outPageMock = $this->getMock( OutputPage::class, [ 'addModules' ], [], '', false );
		$outPageMock->expects( $this->once() )
			->method( 'addModules' )
			->with( [ 'ext.popups' ] );

		$contextMock = $this->getMockBuilder( PopupsContextTestWrapper::class )
			->setMethods( [ 'areDependenciesMet', 'isEnabledByUser' ] )
			->disableOriginalConstructor()
			->getMock();
		$contextMock->expects( $this->once() )
			->method( 'areDependenciesMet' )
			->will( $this->returnValue( true ) );
		$contextMock->expects( $this->once() )
			->method( 'isEnabledByUser' )
			->with( $userMock )
			->will( $this->returnValue( true ) );

		PopupsContextTestWrapper::injectTestInstance( $contextMock );
		PopupsHooks::onBeforePageDisplay( $outPageMock, $skinMock );
	}
}
