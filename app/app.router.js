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
            .when('/form/angular', 'form.angular')
            .when('/form/mixed', 'form.mixed')
            .when('/form/multiple', 'form.multiple')
            .when('/form/validator', 'form.validator')

            .segment('form', {
                templateUrl: 'form/form.html',
                default: true,
                controller: 'FormController',
                resolveFailed: error
            })
            .within()
                .segment('base', {
                    templateUrl: 'form/base/base.form.html',
                    default: true,
                    controller: 'BaseFormController',
                    resolveFailed: error
                })
                .segment('angular', {
                    templateUrl: 'form/angular/angular.form.html',
                    controller: 'AngularFormController',
                    resolveFailed: error
                })
                .segment('mixed', {
                    templateUrl: 'form/mixed/mixed.form.html',
                    controller: 'MixedFormController',
                    resolveFailed: error
                })
                .segment('multiple', {
                    templateUrl: 'form/multiple/multiple.form.html',
                    controller: 'MultipleFormController',
                    resolveFailed: error
                })
                .segment('validator', {
                    templateUrl: 'form/validator/validator.html',
                    controller: 'ValidatorController',
                    resolveFailed: error
                })
                .up();

        $routeProvider.otherwise({redirectTo: '/form'});
    }
})();