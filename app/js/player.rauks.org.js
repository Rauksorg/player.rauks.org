var StarterApp = angular.module('StarterApp', ['ngMaterial', 'ngMessages'])
StarterApp.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .backgroundPalette('grey', {
            'default': '900',
        })
        .dark();
});
StarterApp.controller('Testctrl', function($scope,$interval) {
$scope.test=99;

    
});