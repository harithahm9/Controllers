var app = angular.module("tutorialApp", [])
app.controller("TutorialController", function ($scope, $timeout) {
    $scope.text = "hello world";
    $scope.name = "alpha";
    $scope.show = true;
    $scope.hide = true;
    $scope.condi = false;
    $scope.students = ["alpha", "beta", "gama"];
    $scope.error = false;
    $timeout(function () {
        
        $scope.error = true;
    }, 5000);
});
