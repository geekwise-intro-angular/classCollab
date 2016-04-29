angular.module('app')
    .controller('HomeCtrl',function($scope){
        $scope.message='this is home';
        $scope.array=[{first:'vince',last:'fern',age:30,show:true},{first:'jon',age:27,last:'her',show:true},{first:'jane',age:18,last:'doe',show:true}];
        $scope.change = function(){
           angular.forEach($scope.array,
                function(item){
                    if (item.show == true){
                        item.show = false;
                    }else{
                        item.show = true;
                    }
                });
        }
});
