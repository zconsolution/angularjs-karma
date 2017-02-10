
// test for numberAddition controller

describe('numberAddition', function () {

  beforeEach(module('numberAdditionApp'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('sum', function () {
		it('2 + 3 should equal 5', function () {
			var $scope = {};
			var controller = $controller('numberAdditionController', { $scope: $scope });
			$scope.num1 = 2;
			$scope.num2 = 3;
			$scope.sum();
			expect($scope.total).toBe(5);
		});	
	});

});
