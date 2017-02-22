angular
.module('motoTabsApp')
.component('motoTabItem', {
	transclude: true,
	require: {
		motoTabs: '^motoTabs'
	},
	template: '<div ng-transclude class="animate-box" ng-show="$ctrl.tab.selected"></div>',
	controller: [
		'$attrs',
		function($attrs) {
			this.tab = {
				title: $attrs.title,
				selected: false
			};

			this.$onInit = function() {
				this.motoTabs.addTab(this.tab);
			};
		}
	]
});
