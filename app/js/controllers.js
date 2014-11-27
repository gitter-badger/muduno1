var mudunoApp = angular.module('mudunoApp', []);

mudunoApp.directive('overview', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/overview.html'
    };
});

// mudunoApp.directive('accordion', function() {
//     return {
//         restrict: 'E',
//         templateUrl: 'inc/bs-accordion.html'
//     }
// });

mudunoApp.directive('kingscross', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/kingsCrossLocation.html'
    }
});

mudunoApp.directive('coventgarden', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/coventgarden.html'
    }
});

mudunoApp.directive('embankment', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/embankment.html'
    }
});

mudunoApp.directive('barbican', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/barbican.html'
    }
});
mudunoApp.directive('liverpoolst', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/liverpoolstreet.html'
    }
});
mudunoApp.directive('oxfordcircus', function() {
    return {
        restrict: 'E',
        templateUrl: 'inc/oxfordcircus.html'
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

muduno.controller("MyController", function($scope) {
                $scope.myForm = {};
                $scope.myForm.firstName = "Jakob";
                $scope.myForm.lastName  = "Jenkov";
            } );
