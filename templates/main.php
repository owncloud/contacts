<?php
script('contactsrework', 'vendor/angular/angular');
script('contactsrework', 'vendor/angular-ui-router/release/angular-ui-router');
script('contactsrework', 'vendor/dav/dav');
script('contactsrework', 'vendor/vcard/src/vcard');
script('contactsrework', 'public/script');
style('contactsrework', 'public/style');
?>

<div id="app" ng-app="contactsApp">
	<div id="app-navigation">
		<ul addressBookList></ul>
		<?php print_unescaped($this->inc('part.settings')); ?>
	</div>

	<div id="app-content">
		<div class="app-content-list" ui-view></div>
		<div class="app-content-detail" ui-view="sidebar"></div>
	</div>
</div>
