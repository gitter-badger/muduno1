var mudunoApp = angular.module('mudunoApp', []);


mudunoApp.controller('OverviewCtrl', function ($scope) {
  $scope.greeting = "hello";
});

mudunoApp.controller('LocationCtrl', function ($scope) {
  $scope.greeting = "this is the location page";
});

mudunoApp.controller('PanelCtrl', function(){
    this.tab = 1;
    this.selectTab = function(setTab) {
        this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
});