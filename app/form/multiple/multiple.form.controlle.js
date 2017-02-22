'use strict';

(function() {
    angular.module('app').controller('MultipleFormController', MultipleFormController);

    MultipleFormController.$inject = ['$scope'];
    function MultipleFormController($scope) {
        $scope.submit = submit;
        $scope.bindToForm = bindToForm;

        function submit() {
            console.log('Submitted')
        }

        function bindToForm() {
            $scope.form.$addControl($scope.pureForm.pureInput);
            $scope.form.pureInput.$validate();

            // set pristine, dirty, touched, etc
        }
    }
})();