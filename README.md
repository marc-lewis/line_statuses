# Tube Statuses

An SPA that shows the current status of the Tube, TFL Rail, Overground, and DLR.

## set up

This project does not require any global installs of gulp/karma, etc. Instead, it uses local node_module scoping through npm scripts. However, it does require a global install of node 8 or higher (untested on less).

If you would like to use your own API keys to track hits please head to `https://api-portal.tfl.gov.uk/` to sign up. Once you have successfully registered, place your API Credentials in a file called `.env` at the root of the project as follows: 

`.env/`
```                
TFL_APPLICATION_ID=yourApplicationId
TFL_APPLICATION_KEY=yourApplicationKey
```                 

There is a file called `.env.example` for reference that you can copy&paste/move to `.env`. These will get injected into the script during build time (see line 89 in `./gulpfile.babel.js`).

Then:

- Navigate to the root directory of the project on your command line/terminal
- Install project dependencies: run `npm install`
- Start the dev task to build the project and spin up a server: run `npm run dev`
- Head to http://localhost:8000

## tests

There are tests for the components in `test/unit`. To run the tests go to the root directory of the project in your terminal/command line and run `npm run test`


## Assumptions

I have made a few assuptions that I would ask for clarity on, or chat to a designer/UX/etc to gather the correct behaviour/look for the app.

- The reference design displays tram (and possible other lines) - but this is not returned from `http://api.tfl.gov.uk/Line/Mode/Tube/Status` and the spec states the app "will show the current status
of all tube lines." It seems pernickety but I'd ask, anyway.
- The reference design does not display the status of any of the lines. I've included them on the right hand side of each line status in a different weight to the tube line for emphasis, but I would not release this without something signed off on an email or jira ticket. 
- I've also taken some liberties with the general design. The line colors are taken from http://content.tfl.gov.uk/tfl-colour-standards-issue04.pdf, and the fonts - Johnston100 - I've extracted from https://tfl.gov.uk/tube-dlr-overground/status/. On wider screens the columns split into 3 as it becomes harder to read in a two column flow over 1300px. 
- The rainbow list at https://tfl.gov.uk/tube-dlr-overground/status/ also changes the background color of the statuses depending on the service and has a drop down for more information, but I feel like implementing these would be beyond the scope of the test - I haven't implemented anything for this here.
- I've used Vue and some CSS (flexbox, calc) that may get a bit janky on IE9. Vue doesn't support IE 8 or lower. I don't know what the expected browser support for this is, but, as this is a .gov.uk site, it could be as low as IE8 which means the app would have to be rebuilt in vanilla JS, or angular 1x if you'd like a framework.
- There's a lot of DOM manipulation here that's based on a response from an api call - vue uses plain text for its interpolation so XSS should be less of an issue, but I'd still like to know how well it can prevent any potential malicous injections from the JSON response. This isn't something I've looked into greatly but it seems like something of interest based on the phone interview I had.
- There's no error state if the API fails or no results are received. The API seems solid but I'd like to have something in there to indicate to a user on a slower connection that the API call is in process.
- I've made the statuses focusable for screen readers, but I'm not sure if you would consider this a tab trab as it takes a while to navigate.

## Takeouts

I think I did ok - I spent around a working day on it. It looks decent, it's tested ok, and it works on all the modern browsers. I have, however, missed two things that I'll be honest about: eslint and stylelint. These are taken care of in my IDE so I forget to add them to the build process for solo projects like this, but they should also be run with a precommit hook and during browserify build for any deployments to make sure everyone is aligned. It feels too cheeky to add it in now that the site is functional and tested.
There's no proper dist version, either. Ideally, I'd use docker and minify/uglify/etc for release.