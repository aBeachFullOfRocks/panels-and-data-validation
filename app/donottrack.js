function isDoNotTrackEnabled () {
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
}
