var mudunoApp = angular.module('mudunoApp', [
  'ngRoute',
  'mudunoControllers'
]);

mudunoApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/overview', {
                templateUrl: 'partials/overview.html',
                controller: 'OverviewCtrl'
            }).
            when('/location', {
                templateUrl: 'partials/location.html',
                controller: 'LocationCtrl'
            }).
            otherwise({
                redirectTo: '/overview'
            });
    }
  ]);