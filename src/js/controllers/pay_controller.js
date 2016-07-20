var payModule = angular.module('SeventPay.controllers.Pay', []);

payModule.controller('PayController', ['$rootScope', '$scope', '$location','toaster',
    function ($rootScope, $scope, $location,toaster) {
    $rootScope.currentTitle = '支付';
    $scope.dataLoading = false;

    $scope.pay = {
        count: '',
        type: 1
    };

    $scope.selectPayType = function (type) {
        $scope.pay.type = type;
    };

    $scope.pay = function () {
        $scope.dataLoading = true;
        toaster.pop('error', '支付失败,请稍后重试...');
        $location.path('/result');
    };

}]);

payModule.controller('ResultController', ['$rootScope', '$scope', function ($rootScope, $scope) {
    $rootScope.currentTitle = '支付详情';
}]);