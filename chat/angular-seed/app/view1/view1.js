'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$route', '$scope', '$http','NickService', function($route, $scope, $http, NickService) {

    $scope.click = function(){
        var rest = new restService();
        var date = new Date();
        rest.addFunction("omg",date,546,"ghfgh",$scope.message)
    }

/*
    alert($scope.nick);
*/


    function restService(){
        var url = 'http://localhost:3000/chat';

        this.getFunction = function(){
            $http.get(url).then(function(response) {
            $scope.json_data = response.data;
            });
        };

        this.addFunction = function(author,date,time,avatar,message){
            var param = JSON.stringify({Author:author, Date:date, Time:time, Avatar:avatar, Message:message})
            $http.post(url, param).then(function(){
            $route.reload();
            });
        };


    }

    var rest = new restService();
    rest.getFunction();






}]);