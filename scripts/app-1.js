var tutorialApp=angular.module("tutorialApp",[]);
tutorialApp.controller("TutorialController",function($scope){
 $scope.user="alpha";
 $scope.price=500;
 $scope.gender="F";
});

tutorialApp.filter("gender",function(){
    return function(input){
        if(input==='M')return 'Mr.';
        if(input==='F')return 'Ms.';
        return "abc";
    }
});

