var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactListCtrl', ['$scope','$http',
    function ($scope,$http) {
      $http.get("assets/contacts.json").success(function(data) {
        $scope.contacts = data.contacts;
        console.log("Inside ContactListCtrl");
        console.log(data);
      });
    }
]);

contactControllers.controller('ContactDetailCtrl', 
    ['$scope','$routeParams','$http',
    function ($scope,$routeParams, $http) {
      console.log("Inside ContactDetailCtrl");
      //$scope.contactId = $routeParams.contactId;
      $http.get("assets/contacts.json").success(function(data) {
        $scope.contact = data.contacts[$routeParams.contactId];
        console.log("Inside ContactListCtrl");
        console.log(data);
      });
  
      //$http.get('assets/' + $routeParams.contactId + '.json').
      //  success(function(data) {
      //    $scope.contact = data;
      //    console.log("ContactDetailCtrl: contact is:");
      //    console.log(data);
      //});

      //console.log($scope);
      //console.log($routeParams);
      //$scope.selectedContact = $scope.contacts[$routeParams.contactId];
    }
]);

