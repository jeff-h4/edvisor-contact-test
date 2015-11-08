var changeHeroesApp = angular.module("changeHeroesApp",[]);

changeHeroesApp.controller("ChangeHeroesCtrl", function($scope) {
  $scope.contacts = [
    {first_name: "a", last_name: "a"},
    {first_name: "b", last_name: "b"},
    {first_name: "c", last_name: "c"},
    {first_name: "d", last_name: "d"}
  ];
});
