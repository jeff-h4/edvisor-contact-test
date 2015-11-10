var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactListCtrl', ['$scope','$http',
    function ($scope,$http) {
      $http.get("assets/contacts.json").success(function(data) {
        $scope.contacts = data.contacts;
        for (var i = 0; i < data.contacts.length; i++ ){
          $scope.contacts[i].id = i;
        } 
        $scope.selectedContact = $scope.contacts[0];
        $scope.printSomething = function(id) {
          console.log("A contact with ID " + id + " was clicked");
          $scope.selectedContact = $scope.contacts[id];
        };

        $scope.message = "<strong>Jeff, we want to hire you.</strong>";
        $scope.items = ["number_one","number_two","number_three"];
        $scope.some_value = $scope.items[0];
        console.log("Inside ContactListCtrl");
        console.log(data);
      });
    },

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

