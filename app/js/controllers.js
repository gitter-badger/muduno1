var mudunoApp = angular.module('mudunoApp', []);

mudunoApp.directive('overview', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/overview.html'
    };
});

mudunoApp.directive('accordion', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/accordion.html'
    }
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

// mudunoApp.controller('AccordionCtrl', function ($scope){
// 	 //array to hold all active tabs
//     $scope.activeTabs = [];

//       //check if the tab is active
//     $scope.isOpenTab = function (tab) {
//         //check if this tab is already in the activeTabs array
//         if ($scope.activeTabs.indexOf(tab) > -1) {
//             //if so, return true
//             return true;
//         } else {
//             //if not, return false
//             return false;
//         }
//     }
//     //function to 'open' a tab
//     $scope.openTab = function (tab) {
//     	$scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
//         //check if tab is already open
//         if ($scope.isOpenTab(tab)) {
//             //if it is, remove it from activeTabs array
//             $scope.activeTabs.splice($scope.activeTabs.indexOf(tab), 1);
//         } else {
//             //if it's not, add to array
//             $scope.activeTabs.push(tab);
//         }
//     }

// });

mudunoApp.controller('DataTableCtrl', function ($scope){
  $scope.locations = [
    {
        "locationID": "1", 
        "location": "King's Cross", 
        "engagements": "1234", 
        "socialShares": "500", 
        "claims": "342",
        "rewardsLeft": "200",
        "rewardType": "tickets"

    }, 
    {
        "locationID": "2", 
        "location": "Covent Garden",
        "engagements": "1654", 
        "socialShares": "5045", 
        "claims": "765",
        "rewardseft": "123",
        "rewardType": "points"
    }, 
    {
        "locationID": "3", 
        "location": "Embankment",
        "engagements": "16876", 
        "socialShares":"3453", 
        "claims": "142346",
        "rewardsLeft": "10",
        "rewardType": "tickets"

    }, 
    {
        "locationID": "4", 
        "location": "Barbican",
        "engagements": "634534", 
        "socialShares": "8686", 
        "claims": "3000",
        "rewardsLeft": "156",
        "rewardType": "tickets"
    }, 
    {
        "locationID": "5", 
        "location": "Liverpool Street", 
        "engagements": "9598", 
        "socialShares": "5053", 
        "claims": "584",
        "rewardsLeft": "125",
        "rewardType": "points"
    },
    {
        "locationID": "6", 
        "location": "Oxford Circus", 
        "engagements": "789", 
        "socialShares": "234", 
        "claims": "109",
        "rewardsLeft": "8",
        "rewardType": "tickets"
    }
  ];
});


