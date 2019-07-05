# How to add Factory to AngularJS Controller
## Preamble
This Github repo works as posted - you can clone and run the code (in latest Chrome browser, at least), but the same code **does not run** when I copy the code to JSFiddle [here](https://jsfiddle.net/aBeachFullOfRocks/myzk6erj/3/).

The code is cut down from a larger project. My controllers are working, but I can't get a working factory to use a plain Javascript function and capture the returned data.

## Questions
I'm trying to get a working Factory added to my Controller, so I can capture the returned data from a plan Javascript function. Once I've posted questions on StackOverflow, I'll update this README with links to the questions. If things work out, I'll update the code and push the changes so others can benefit.

## Resources
Uses original code from [AngularJS Pageslide Directive](https://github.com/danielepiccone/ng-pageslide) on GitHub.

The client-side 'do not track' code is from  [How to detect and use ‘Do Not Track’ on your website](https://medium.com/farewill/how-to-detect-and-use-do-not-track-on-your-website-77f21f62be48) on Medium.

## Running these examples
Clone the repo locally, then from the repo root, load `do-not-track-example.html` as a demonstration of the plan Javascript function. Change your `do not track` setting in your browser and reload the page to see the change. (Change it back after!)

Load `app/sidebar.html` to see the cut down AngularJS application. Note that the `Save` button in the `Contact` panel is disabled until you enter something in the `Phone Number` field. (Additional styling, form validation and error messaging is still being added to the real project.)

To reproduce the problem, comment line 26 `doNotTrack: "no frickin' idea"` in `app/sidebarcontroller.js`, uncomment line 31 `doNotTrack: isDoNotTrackEnabled() ? 'enabled' : 'disabled'` and reload the page. Everything breaks.
