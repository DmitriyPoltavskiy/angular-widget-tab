function motoTabs() {
	return {
		restrict: 'A',
		transclude: true,
		template:
		'<ul class="nav nav-tabs">' +
			'<li ng-repeat="tab in tabs.tabs" class="" ng-class="{ ' + 'active' + ': tab.selected === true }">' +
				'<a href="" ng-bind-html="tab.title" ng-click="tabs.selectTab($index);"></a>' +
			'</li>' +
		'</ul>' +
		'<div class="moto-tab-body" ng-transclude></div>',
		controllerAs: 'tabs',
		controller: [
			function() {
				this.tabs = [];

				this.addTab = function addTab(tab) {
					this.tabs.push(tab);
				};

				this.selectTab = function selectTab(index) {
					for (var i = 0; i < this.tabs.length; i++) {
						this.tabs[i].selected = false;
					}
					this.tabs[index].selected = true;
				};
			}
		],
		link: function($scope, $element, $attrs, $ctrl) {
			$ctrl.selectTab($attrs.active || 0);
		}
	};
}

angular
	.module('motoTabsApp')
	.directive('motoTabs', motoTabs);