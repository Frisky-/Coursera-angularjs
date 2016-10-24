(function () {
  'use strict';
  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

      $scope.checkMeals = function () {
        var meals = validMeals($scope.mealsList);
        if(meals.length > 0 && meals.length <= 3){
          $scope.message = "Enjoy!";
          $scope.messageClass = "success";
        }else if(meals.length > 3){
          $scope.message = "Too much!";
          $scope.messageClass = "success";
        }else {
          $scope.message = "Please enter data first";
          $scope.messageClass = "error";
        }
      };

      function validMeals(meals) {
        var mealsList = meals.split(',');
        var result = mealsList.filter(function (meal) {
          return !!meal;
        });
        return result;
      }
    }
})();
