(function(){
  'use strict'

  angular.module('LunchChecker',[])

  .controller('FoodName', function($scope){
    $scope.dishname="";
    $scope.message="";
    $scope.checked=false;

    $scope.checkfood=function(){
      if($scope.dishname.trim().length === 0){
        $scope.empty=true;
      }
      else{
        $scope.checked=true;
        $scope.empty=false;
        var noOfDishes=$scope.dishname.split(',');
        var noOfFillDishes= noOfDishes.filter(function(v){
          return v.trim()!=='';
        });
        if(noOfFillDishes.length<=3){
          $scope.message="Enjoy!";
        }else{
          $scope.message="It's Too much!";
        }
      }

  };
});
})();
