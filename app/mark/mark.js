
angular.module('Mark', []);
angular.module('Mark')
    .controller('MarkCtrl', MarkCtrl)
    .directive('markDir', markDir);

    function MarkCtrl($scope) {
        $scope.message = "Mark's controller";
    }
    
    function markDir() {
    var directive = {
        restrict: 'E',
        templateUrl: 'templates/markDir.html'
    };

    return directive;
}