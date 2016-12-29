'use strict';

(function() {
    angular.module('app').config(AppConfig);

    AppConfig.$inject = ['$routeSegmentProvider', '$locationProvider', '$routeProvider'];
    function AppConfig($routeSegmentProvider, $locationProvider, $routeProvider) {
        var error = {templateUrl: 'error.html'};

        $locationProvider.hashPrefix('!');
        // Configuring provider options
        $routeSegmentProvider.options.autoLoadTemplates = true;

        $routeSegmentProvider
            .when('/form', 'form')
            .when('/form/base', 'form.base')


            .segment('form', {
                templateUrl: 'form/form.html',
                default: true,
                resolveFailed: error
            })
            .within()
                .segment('base', {
                templateUrl: 'form/base/form.base.html',
                resolveFailed: error
            })
            .up();

        $routeProvider.otherwise({redirectTo: '/form'});
    }
})();