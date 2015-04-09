var myApp = angular.module('app', []);

myApp.controller('controller', function() {
    var stats = this;
    stats.userList = people;
});
