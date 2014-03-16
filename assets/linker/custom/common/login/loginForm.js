angular.module('login.form', ['ui.directives'])
    .directive('loginForm', function () {
      return {
        templateUrl: '/linker/custom/common/login/loginForm.tpl.html'
      };
    })
// The LoginFormController provides the behaviour behind a reusable form to allow users to authenticate.
// This controller and its template (login/form.tpl.html) are used in a modal dialog box by the security service.
    .controller('LoginFormController', ['$scope', '$rootScope', 'login', function ($scope, $rootScope, login) {
      // The model for this form
      $scope.user = null;
      $scope.alerts = [];

      $scope.addAlert = function(alert) {
        $scope.alerts.push(alert);
      };

      $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
      };      

      // Attempt to authenticate the user specified in the form's model
      $scope.login = function (user) {

        // Try to login
        login.login(user.email, user.password).then(function () {
          if (!login.isAuthenticated()) {
            // If we get here then the login failed due to bad credentials
            $scope.user = null;
            //$scope.addAlert({msg: $scope.authError, type: 'danger'});
            $rootScope.$broadcast('login-failed');
          }
          else {
            $scope.user = login.user;
            $rootScope.$broadcast('login-success');
          }
        }, function (x) {
          // If we get here then there was a problem with the login request to the server
          $scope.user = null;
          //$scope.authError = 'Error logging in. Problem contacting server.';
          $rootScope.$broadcast('login-server-error');
        });
      };

    }])
;