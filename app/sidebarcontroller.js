var SidebarController = function($scope, $window) {
    var self = this;
    self.status ={
        contact: 'Checking contact',
        details: 'Checking details'
    };
    self.contact = {
        phone: ''
    };
    self.configuration = {
        doNotTrack: "no frickin' idea"
        // doNotTrack: isDoNotTrackEnabled() ? 'enabled' : 'disabled'
    };
};

var module = angular.module('sidebarApp', ['pageslide'])
    .controller('SidebarController', SidebarController);
