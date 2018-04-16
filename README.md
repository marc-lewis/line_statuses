# Tube Statuses

An SPA that shows the current status of the Tube, TFL Rail, Overground, and DLR.

## set up

This project does not require any global installs of gulp/karma, etc. Instead it should use local node_module scoping through npm scripts. However, it does require a global install of node 8 or higher.

For the app to run successfully and display the status of the Tube/TFLRail/DLR/Overground lines you will need to register for an API key (with access to lines) at `https://api-portal.tfl.gov.uk/`. Once you have successfully registered place your API Credentials in a file called `.env` at the root of the project as follows: 

`.env/`
```                
TFL_APPLICATION_ID=yourApplicationId
TFL_APPLICATION_KEY=yourApplicationKey
```                 

There is a file called `.env.example` for reference that you can copy/paste to `.env`.

Then:

- Install project dependencies: run `npm install`
- Start the dev task to build the project and spin up a server: `npm run dev`
- To run tests: `npm run test`
- Head to http://localhost:8000
