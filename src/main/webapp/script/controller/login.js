/**
 *
 */
'use strice';
angular.module('myApp').controller('LoginCtrl', function ($scope, $state) {
  console.log('登录页面');
  $scope.login = function (event) {
    console.log(event);
    $state.go('index');
  }
})