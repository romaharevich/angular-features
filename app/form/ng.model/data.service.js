'use strict';

(function() {
    angular.module('app').service('DataService', DataService);

    function DataService() {
        this.get = get;
        this.save = save;
        this.exactData = 'SOME SERVER DATA';

        function get() {
            var it = this;

            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                     resolve(it.exactData);
                }, 500);
            });
        }

        function save(value) {
            var it = this;

            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    if (value == value.toUpperCase()) {
                        it.exactData = value;
                        resolve();
                    } else {
                        reject();
                        throw new Error('Invalid Data')
                    }
                }, 500);
            });
        }
    }
})();