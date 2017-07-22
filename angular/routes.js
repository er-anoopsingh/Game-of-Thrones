myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'views/main.html',
      controller: 'displayAllCtrl',
      controllerAs: 'display'
    })
    .when('/book/:id',{
      templateUrl: 'views/book.html',
      controller: 'displayBookCtrl',
      controllerAs: 'singleBook'
    })
    .when('/character/:id',{
      templateUrl: 'views/character.html',
      controller: 'displayCharCtrl',
      controllerAs: 'singleChar'
    })
    .when('/house/:id',{
      templateUrl: 'views/house.html',
      controller: 'displayHouseCtrl',
      controllerAs: 'singleHouse'
    })
    .otherwise({
      redirectTo: '/'
    })
}]);
