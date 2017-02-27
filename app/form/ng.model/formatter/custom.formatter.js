'use strict';

(function() {
    angular.module('app').directive('customFormatter', CustomFormatter);

    // ngModel -> viewValue

    function CustomFormatter() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$formatters.push(function(value) {
                    return value && value.toLowerCase();
                });
            }
        };
    }
})();