var pharmacyApp=angular.module("pharmacyApp",[]);  
pharmacyApp.controller("ControllerC",function($scope){
    $scope.doctor="abc";
});
pharmacyApp.controller("ControllerD",function($scope){
    $scope.patient="xyz";
});

var hospitalApp=angular.module("hospitalApp",["pharmacyApp"]);  
hospitalApp.controller("ControllerA", ["$scope","$timeout",function(a,to){
    a.student="alpha";
    to(function(){
        // alert("ok");
    },3000);
}]);
hospitalApp.controller("ControllerB",function($scope){
    $scope.teacher="beta";
});
















