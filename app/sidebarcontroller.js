/**
 * Declare our application level module
 */
angular
    .module('sidebarApp', ['pageslide']);

/**
 * Define the application level controller
 */
angular
    .module('sidebarApp')
    .controller('SidebarController', SidebarController);

function SidebarController () {
    var self = this;
    self.status ={
        contact: 'Checking contact',
        details: 'Checking details'
    };
    self.contact = {
        phone: ''
    };
    self.configuration = {
        // This next is a placeholder before getting the real value
        // Comment out the next line to switch behaviours
        doNotTrack: "no frickin' idea"
        // This next is the effect I want - but this code wrecks the page rendering
        // If I try to declare SidebarController (sidebarFactory)
        // and use sidebarFactory.isDoNotTrackEnabled() that fails also
        // Uncomment the next line to switch behaviours
        // doNotTrack: isDoNotTrackEnabled() ? 'enabled' : 'disabled'
    };
}
