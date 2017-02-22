function motoTabItem() {
	return {
		restrict: 'A',
		scope: {},
		require: '^motoTabs',
		controllerAs: 'tab',
		link: function($scope, $element, $attrs, $ctrl) {
			$scope.title = $element.find('title').eq(0).text();

			$scope.tab = {
				title: $scope.title,
				selected: false
			};

			$scope.$watch('tab.selected', function() {
				if ($scope.tab.selected) {
					$element.removeClass('hide');
				}
				else {
					$element.addClass('hide');
				}
			});

			$ctrl.addTab($scope.tab);
		}
	};
}

angular
	.module('motoTabsApp')
	.directive('motoTabItem', motoTabItem);
