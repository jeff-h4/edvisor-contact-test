var contactControllers = angular.module('contactControllers', []);

contactControllers.controller('ContactListCtrl', ['$scope','$http',
    function ($scope,$http) {
      $http.get("assets/contacts/contacts.json").success(function(data) {
        $scope.contacts = data.contacts;
        console.log("Inside ContactListCtrl");
        console.log(data);
      });
    }
]);

contactControllers.controller('ContactDetailCtrl', ['$scope','$routeParams',
    function ($scope,$routeParams) {
      $scope.contactId = $routeParams.contactId;
      console.log("Inside ContactDetailCtrl");
    }
]);

