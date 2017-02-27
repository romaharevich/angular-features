'use strict';

(function() {
    angular.module('app').service('FakeService', FakeService);

    FakeService.$inject = [];
    function FakeService() {
        this.validate = function(text) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    var match = text.match(/\d/g);
                    //Check for exact match
                    if (match && match[0] === text) {
                        resolve();
                    } else {
                        reject();
                    }
                }, 1000);
            });
        }
    }
})();