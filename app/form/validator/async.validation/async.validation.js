'use strict';

(function() {
    angular.module('app').directive('customAsyncValidation', CustomAsyncValidation);

    CustomAsyncValidation.$inject = ['FakeService', '$q'];
    function CustomAsyncValidation(FakeService, $q) {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {

                ngModel.$asyncValidators.myCustomAsyncValidation = function(modelValue, viewValue) {
                    return FakeService.validate(viewValue).then(function() {
                        element[0].setCustomValidity('');
                        return true;
                    }).catch(function() {
                        element[0].setCustomValidity('Async validation is not passed');
                        return $q.reject('async!');
                    })
                };
            }
        }
    }
})();