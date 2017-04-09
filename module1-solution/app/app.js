(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.items='';
        $scope.showResult = false;
        $scope.checkIfTooMuch = function() {
            var inputItems = $scope.items.split(',');
            var itemCount = 0;
            if (inputItems.length === 0) {
                $scope.lunchResult = 'Please enter data first';
                $scope.textStyle = 'btn btn-danger';
                $scope.showResult = true;
            } else {
                for (var i = 0; i < inputItems.length; i++) {
                    var inputItem = inputItems[i];
                    if (inputItem.length > 0) {
                        itemCount++;
                    }
                }
                if (itemCount > 0 ) {
                    $scope.textStyle = 'btn btn-success';
                    $scope.showResult = true;
                    if (itemCount <= 3) {
                        $scope.lunchResult = 'Enjoy!';
                    }
                    else if ( itemCount > 3) {
                        $scope.lunchResult = 'Too much!';
                    }
                } else {
                    $scope.lunchResult = 'Please enter data first';
                    $scope.textStyle = 'btn btn-danger';
                    $scope.showResult = true;
                }
            }
        }
    }
    
})();