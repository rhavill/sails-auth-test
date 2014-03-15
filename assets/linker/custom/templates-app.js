angular.module('templates-app', ['home/home.tpl.html', 'login/login.tpl.html', 'private/private.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "    <h1>Home Page</h1>\n" +
    "\n" +
    "    <p class=\"lead\">\n" +
    "        Welcome to the home page. This page is publicly accessible.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("login/login.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("login/login.tpl.html",
    "<div class=\"row=fluid\" login-form>\n" +
    "</div>");
}]);

angular.module("private/private.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("private/private.tpl.html",
    "<div class=\"row-fluid\">\n" +
    "    <h1 class=\"page-header\">\n" +
    "        Private Page\n" +
    "    </h1>\n" +
    "\n" +
    "    <p>\n" +
    "        In order to view this page, you must be logged in.\n" +
    "    </p>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);
