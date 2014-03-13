angular.module('templates-common', ['login/loginForm.tpl.html', 'login/loginLink.tpl.html']);

angular.module("login/loginForm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/loginForm.tpl.html",
    "<form class=\"form-horizontal\" ng-controller=\"LoginFormController\">\n" +
    "    <alert ng-repeat=\"alert in alerts\" type=\"alert.type\" close=\"closeAlert($index)\">{{alert.msg}}</alert>\n" +
    "    <div class=\"control-group\">\n" +
    "        <label class=\"control-label\" for=\"inputUsername\">Username</label>\n" +
    "\n" +
    "        <div class=\"controls\">\n" +
    "            <input name=\"username\" ng-model=\"user.username\" type=\"text\" id=\"inputUsername\" placeholder=\"Username\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"control-group\">\n" +
    "        <label class=\"control-label\" for=\"inputPassword\">Password</label>\n" +
    "\n" +
    "        <div class=\"controls\">\n" +
    "            <input name=\"password\" ng-model=\"user.password\" type=\"password\" id=\"inputPassword\" placeholder=\"Password\">\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"control-group\">\n" +
    "        <div class=\"controls\">\n" +
    "            <!--label class=\"checkbox\">\n" +
    "                <input type=\"checkbox\"> Remember me\n" +
    "            </label-->\n" +
    "            <button id=\"login-button\" ng-click=\"login()\" class=\"btn\">Sign in</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>");
}]);

angular.module("login/loginLink.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/loginLink.tpl.html",
    "<a ng-hide=\"isAuthenticated()\" href=\"#/login\"><i class=\"icon-user\"></i>&nbsp;Login</a>\n" +
    "<a ng-show=\"isAuthenticated()\" href=\"#\" ng-click=\"logout()\"><i class=\"icon-user logout\"></i>&nbsp;Logout</a>\n" +
    "");
}]);
