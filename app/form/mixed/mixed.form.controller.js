'use strict';

(function() {
    angular.module('app').controller('MixedFormController', MixedFormController);

    MixedFormController.$inject = ['$scope'];
    function MixedFormController($scope) {
        $scope.reset = reset;
        $scope.submit = submit;
        $scope.invalidate = invalidate;

        function submit() {
            console.log($scope.form);
        }

        function reset() {
            console.log('Reset');
            $scope.data = undefined;
            $scope.form.$setPristine();
        }

        function invalidate() {
            $scope.form.$setValidity('custom', false);
        }
    }
})();