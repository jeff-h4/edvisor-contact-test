var contactApp = angular.module("contactApp",
                        ['ngRoute','contactControllers']);

contactApp.config(['$routeProvider',
  function($routeProvider) {
    console.log("app.js routeProvider function");
    console.log($routeProvider);
    $routeProvider.
      when('/contacts', {
        templateUrl: 'partials/contact-list.html',
        controller: 'ContactListCtrl'
      }).
      when('/contacts/:contactId', {
        templateUrl: 'partials/contact-detail.html',
        controller: 'ContactDetailCtrl'
      }).
      otherwise({
        redirectTo: '/contacts'
      });

  }
]);
