'use strict';

(function() {
    angular.module('app').controller('AngularFormController', AngularFormController);

    AngularFormController.$inject = ['$scope'];
    function AngularFormController($scope) {
        $scope.data = {};
    }
})();