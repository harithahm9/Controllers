var tutorialApp=angular.module("tutorialApp",[]);
tutorialApp.controller("TutorialController", function($scope) {
    $scope.greeting="Morning";
    $scope.onBtnClick=function(){
        alert("ok");
    }
});
tutorialApp.directive("headings",function(){

return {
    restrict:'C',
    scope:{
        text:'=',
        click:'&btnclick'
    },
    template:"<h1>Hello {{user}}</h1> <h2>,Good {{greet}}</h2> <button ng-click='dirbtnclick()'>Click me</button>",
    link:function(scope,element,attributes){
        scope.user=attributes.user;
        // console.log("btnclick",scope.btnclick());

    },
    controller:function($scope){
        // $scope.dirbtnclick=$scope.btnclick();
        
    }

}


});