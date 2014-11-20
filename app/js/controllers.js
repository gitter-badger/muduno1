var mudunoControllers = angular.module('mudunoControllers', []);

mudunoControllers.controller('OverviewCtrl', function ($scope) {
  $scope.greeting = "hello";
});

mudunoControllers.controller('LocationCtrl', function ($scope) {
  $scope.greeting = "this is the location page";
});