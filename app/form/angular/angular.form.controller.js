'use strict';

(function() {
    angular.module('app').controller('AngularFormController', AngularFormController);

    AngularFormController.$inject = ['$scope'];
    function AngularFormController($scope) {
        $scope.attemptToSubmit = attemptToSubmit;
        $scope.invalidate = invalidate;
        $scope.submit = submit;
        $scope.reset = reset;

        function attemptToSubmit() {
            console.log('Attempt to submit.', $scope.form);
        }

        function submit() {
            console.log('Submit', $scope.form);
            $scope.form.$setSubmitted();
        }

        function reset() {
            $scope.data = undefined;
            $scope.form.$setPristine();
        }

        function invalidate() {
            $scope.form.$setValidity('custom', false);
        }
    }
})();