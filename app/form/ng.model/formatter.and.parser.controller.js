'use strict';

(function() {
    angular.module('app').controller('FormatterAndParserController', FormatterAndParserController);

    FormatterAndParserController.$inject = ['$scope', 'data', 'DataService'];
    function FormatterAndParserController($scope, data, DataService) {
        $scope.data = data;
        $scope.save = save;
        $scope.exactData = DataService.exactData;

        function save() {
            DataService.save($scope.data).then(function() {
                return DataService.get();
            }).then(function(data) {
                console.log('updated');
                $scope.data = data;
                $scope.exactData = DataService.exactData;
                $scope.$digest();
            })
        }
    }
})();
