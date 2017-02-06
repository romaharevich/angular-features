'use strict';

(function() {
    angular.module('app').controller('FormController', FormController);

    FormController.$inject = ['$scope'];
    function FormController($scope) {
        $scope.submit = submit;

        function submit() {
            alert('submit');
        }
    }
})();