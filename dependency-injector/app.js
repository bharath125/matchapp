(function(){
'use strict'

angular.module('DIApp',[])

.controller('DIController',DIControl)

function DIControl($scope,$filter){
    $scope.name="bharath";

    $scope.upper=function(){
        var upCase=$filter('uppercase');
        $scope.name=upCase($scope.name)
    }
}

})();