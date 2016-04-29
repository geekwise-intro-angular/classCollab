angular.module('app')
    .directive('navSearch',navSearch)
    .directive('list',list)
    .filter('myFilter',function() {
        return function (age) {

            return age - 10;

        }
    });


function navSearch(){
  var directive={
      restrict: "E",
      templateUrl:"templates/navSearch.html"
  };
    return directive;
}

function list(){
    var directive={
        restrict:"A",
        templateUrl:"templates/list.html"
    };
    return directive;
}