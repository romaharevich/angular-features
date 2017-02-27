'use strict';

(function() {
    angular.module('app').directive('customValidation', CustomValidation);

    function CustomValidation() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {

                ngModel.$validators.myCustomValidation = function(modelValue, viewValue) {
                    if (!viewValue) return true;

                    var match = viewValue.match(/\d/g);
                    //Check for exact match
                    var valid = match && match[0] === viewValue;

                    //set html validity
                    element[0].setCustomValidity(valid ? '' : 'Please enter one digit value');
                    return valid;
                };
            }
        }
    }
})();