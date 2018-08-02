var app = angular.module("angular-seed",['ngResource','ngSanitize','ngRoute']);

app.controller("appCtrl", ["$scope","CommonService","$http","$location","appConfig",function ($scope,CommonService,$http,$location,appConfig) {
  console.log("THE MAIN CONTROLLER CALLED IN THIS ANGULAR SEED.");
      $scope.data="HOLA";
      var config = {
                headers : {
                    'Content-Type': 'application/json;'
                }
            };

      // var getBlogs = function(){
      //   $http({
      //     url:appConfig.serverUrl+"api/v1.0/nodejscafe/get/blogs/"+$scope.skip+"/"+$scope.limit,
      //     method:"GET",
      //     headers:{"Content-Type":"application/json"}
      //   }).then(function(response){
      //     console.log("the res is ",response.data.object);
      //     $scope.blogs = response.data.object;
      //   })
      // }
}]);
