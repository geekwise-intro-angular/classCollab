angular.module('Senneca',[]);
angular.module('Senneca')
    .controller('SennecaCtrl',SennecaCtrl);


function SennecaCtrl($scope) {

  	$scope.title=" shop App";
		$scope.title='grocery list';
		$scope.inputModel = '';
		$scope.things_todo = [];

		$scope.get_todos = function () {
			// Get to do items that is stored on the window  local storage  window.localStorage
			var string = $window.localStorage.things_todo;
			$scope.things_todo = string.split(',');
		};
		$scope.push_todo = function (item) {
			$scope.things_todo.push(item); // change
			$scope.inputModel = ''; // clear
			$scope.keep_todos(); // save
		};
		$scope.keep_todos = function () {
			$window.localStorage.things_todo = $scope.things_todo;
			// saving $scope.things_todo to $window
		};
		$scope.delete = function () {
			$scope.things_todo[index] = $scope.things_todo.splice(index, 1);
			$scope.keep_todos();
		};
		$scope.edit = function () {
			$scope.things_todo[index] = $scope.inputModel;
			$scope.keep_todos;
		};
		$scope.read = function (input) {
			$scope.inputModel = input;
		}
});
