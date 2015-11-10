var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactListCtrl', ['$scope','$http',
    function ($scope,$http) {
      $http.get("assets/contacts.json").success(function(data) {
        $scope.pageMode = "display";
        //First pull data from the GET request
        $scope.contacts = data.contacts;
        for (var i = 0; i < data.contacts.length; i++ ){
          $scope.contacts[i].id = i;
        } 
        //Now distribute this data to other vars
        $scope.selectedContact = $scope.contacts[0];
        $scope.contactForm = {};
        $scope.contactForm.phone = $scope.contacts[0].phone; 
        $scope.contactForm.email = $scope.contacts[0].email; 
        $scope.contactForm.address = $scope.contacts[0].address; 
        $scope.printSomething = function(id) {
          console.log("A contact with ID " + id + " was clicked");
          $scope.selectedContact = $scope.contacts[id];
          $scope.phone_input = $scope.contacts[id].phone; 
          $scope.email_input = $scope.contacts[id].email; 
          $scope.address_input = $scope.contacts[id].address; 
        };
        $scope.edit = function(id) {
          console.log("This is EDIT mode.");
          $scope.pageMode = "edit";
        };
        $scope.save = function(id) {
          console.log("This is DISPLAY mode.");
          console.log($scope.selectedContact);
          console.log($scope.contacts[id]);
          console.log($scope.contactForm.phone);
          console.log($scope.contactForm.email);
          console.log($scope.contactForm.address);
          $scope.pageMode = "display";
          $scope.contacts[id].phone   = $scope.contactForm.phone;
          $scope.contacts[id].email   = $scope.contactForm.email;
          $scope.contacts[id].address = $scope.contactForm.address;
          $scope.selectedContact = $scope.contacts[id];
          //console.log($scope.contacts[id]);
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

