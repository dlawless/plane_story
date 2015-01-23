angular.module('PlaneStoryApp', ['ngRoute']);

angular.module('PlaneStoryApp').config(function($routeProvider) {
    $routeProvider
        .when('/', {templateUrl: 'main-template.html', controller: 'MainCtrl'})
        .otherwise({redirectTo: '/'});
});

angular.module('PlaneStoryApp').controller('MainCtrl', function($scope) {

});