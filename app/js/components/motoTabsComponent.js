angular
.module('motoTabsApp')
.component('motoTabs', {
	transclude: true,
	templateUrl: 'tabsTemplate.html',
	controller: [
		'$attrs',
		'$timeout',
		function($attrs, $timeout) {
			var vm = this;
			vm.tabs = [];

			vm.addTab = function addTab(tab) {
				vm.tabs.push(tab);
			};

			vm.selectTab = function(index) {
				if (index >= vm.tabs.length) {
					console.log('Incorrect index');
				}
				else {
					for (var i = 0; i < vm.tabs.length; i++) {
						vm.tabs[i].selected = false;
					}
					vm.tabs[index].selected = true;
				}
			};

			$timeout(function() {vm.selectTab($attrs.active || 0);}, 0);
		}
	]

});