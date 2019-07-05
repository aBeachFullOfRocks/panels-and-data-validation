/**
 * Declare our module to manage the sliding panels
 */
angular
    .module('pageslide', ['pageslide-directive']);

/**
 * Define the sliding panel controller
 */
angular
    .module('pageslide')
    .controller('SlideController',SlideController);

function SlideController ($scope, $window) {
    $scope.checked = false;
    $scope.size = '100px';

    $scope.toggle = function() {
        $scope.checked = !$scope.checked
    };

    $scope.mockRouteChange = function () {
        $scope.$broadcast('$locationChangeStart');
    };

    $scope.onopen = function () {
        alert('Open');
        console.log(this, $scope);
    };

    $scope.onclose = function () {
        alert('Close');
        console.log($scope);
    };
}
