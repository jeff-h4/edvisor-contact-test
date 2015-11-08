var changeHeroesApp = angular.module("changeHeroesApp",[]);

changeHeroesApp.controller("ChangeHeroesCtrl", function($scope,$http) {
  $http.get("assets/contacts.json").success(function(data) {
    $scope.contacts = data.contacts;
  });
});
