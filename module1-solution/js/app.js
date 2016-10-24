(function() {
  'use strict';
  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    $scope.checkMeals = function() {
      if (!$scope.mealsList) {
        $scope.message = "Please enter data first";
        $scope.messageClass = "error";
      } else {
        var meals = validMeals($scope.mealsList);
        if (meals.length <= 3) {
          $scope.message = "Enjoy!";
          $scope.messageClass = "success";
        } else {
          $scope.message = "Too much!";
          $scope.messageClass = "success";
        }
      }
    };

    function validMeals(meals) {
      console.log(meals);
      var result = meals.split(',').filter(function(meal) {
        return !!meal.trim();
      });
      return result;
    }
  }
})();
