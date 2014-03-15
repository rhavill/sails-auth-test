angular.module('login.link', [])
    .directive('loginLink', ['login', function (login) {
      return {
        templateUrl: '/linker/custom/common/login/loginLink.tpl.html',
        scope: true,
        link: function ($scope, $element, $attrs, $controller) {
          $scope.isAuthenticated = login.isAuthenticated;
          $scope.logout = login.logout;
          $scope.$watch(function () {
            return login.user;
          }, function (user) {
            $scope.user = user;
          });
        }
      };
    }])
;
