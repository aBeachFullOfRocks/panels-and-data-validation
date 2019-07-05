/**
 * Define the application level factory
 */
angular
    .module('sidebarApp')
    .factory('sidebarFactory', sidebarFactory);

function sidebarFactory() {
    var isDoNotTrackEnabled = function () {
        var doNotTrackOption = (
            window.doNotTrack ||
            window.navigator.doNotTrack ||
            window.navigator.msDoNotTrack
        );
        if (!doNotTrackOption) {
            return false;
        } else if (doNotTrackOption.charAt(0) === '1' || doNotTrackOption === 'yes') {
            return true;
        } else {
            return false;
        }
    };

    return {
        isDoNotTrackEnabled: isDoNotTrackEnabled
    }
}

