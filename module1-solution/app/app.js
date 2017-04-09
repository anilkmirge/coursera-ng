(function () {
    'use strict';
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.items='';
        $scope.checkIfTooMuch = function() {
            var inputItems = $scope.items.split(',');
            console.log(inputItems);
            var itemCount = 0;
            if (inputItems.length === 0) {
                $scope.lunchResult = 'Please enter data first';
                $scope.textStyle = 'btn-danger';
            } else {
                for (var i = 0; i < inputItems.length; i++) {
                    var inputItem = inputItems[i];
                    if (inputItem.length > 0) {
                        itemCount++;
                    }
                }
                if (itemCount > 0 ) {
                    $scope.textStyle = 'btn-success';
                    if (itemCount <= 3) {
                        $scope.lunchResult = 'Enjoy!';
                    }
                    else if ( itemCount > 3) {
                        $scope.lunchResult = 'Too much!';
                    }
                } else {
                    $scope.lunchResult = 'Please enter data first';
                    $scope.textStyle = 'btn-danger';
                }
            }
        }
    }
    
})();