
// numberAddition controller 

angular.module('numberAdditionApp', []).controller('numberAdditionController', function numberAdditionController($scope) {
  $scope.total = 0;
  $scope.sum = function() {
    $scope.total = $scope.num1 + $scope.num2;
  };
});
