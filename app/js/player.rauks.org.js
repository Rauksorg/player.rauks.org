var app = angular.module('StarterApp', ['ngMaterial', 'ngMessages'])
.config(function ($mdThemingProvider) {
     $mdThemingProvider.theme('default')
        .backgroundPalette('grey',{
            'default':'900',
         })
         .dark();
  });