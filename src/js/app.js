angular.module('SeventPay', [
    'ngRoute',
    'toaster',
    'mobile-angular-ui',
    'SeventPay.controllers.Main',
    'SeventPay.controllers.Pay'
])
    .config(function ($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'home.html', reloadOnSearch: false});
        $routeProvider.when('/pay/', {templateUrl: 'pay.html', reloadOnSearch: false});
        $routeProvider.when('/result/', {templateUrl: 'result.html', reloadOnSearch: false});
    });