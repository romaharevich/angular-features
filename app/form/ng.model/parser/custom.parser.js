'use strict';

(function() {
    angular.module('app').directive('customParser', CustomParser);

    // viewValue -> ngModel

    function CustomParser() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                ngModel.$parsers.push(function(value) {
                    return value && value.toUpperCase();
                });
            }
        };
    }
})();