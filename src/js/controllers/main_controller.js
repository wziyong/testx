var mainModule = angular.module('SeventPay.controllers.Main', []);

mainModule.controller('MainController', ['$rootScope', '$scope', '$window',
    function ($rootScope, $scope, $window) {

        $rootScope.goBack = function () {
            window.history.back();
        };

        $rootScope.close = function () {
            $window.close();
        };

    }]);