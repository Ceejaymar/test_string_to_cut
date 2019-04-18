# Lyft test server

## Routes
- `GET /`       : Welcome message.
- `GET /test/`  : To make sure test route is working and reminder to enter word.
- `POST /test/` : Returns cut string. 

## Use hosted server
### [Hosted Test Server](https://lyft-test-server.herokuapp.com "Test Server")

You may use a cURL command to test the routes.

- `GET /`: `curl -X GET https://lyft-test-server.herokuapp.com/`

- `GET /test/`: `curl -X GET https://lyft-test-server.herokuapp.com/test/`

- `POST /test/` : `curl -X POST https://lyft-test-server.herokuapp.com/test/ --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`


## Use local server
After you cloning the repository, navigate to the project in your terminal.

To install dependencies: `npm install`

To start in development mode: `npm start`

You can open in your browser to get the welcome message and make sure app is running. [http://localhost:3000](http://localhost:3000) 

Open [Postman](https://www.getpostman.com/) or another API development environment.

You may use this Postman collection below to test routes. 

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7b288ee224520e662a93)

#

If you would like to see another application I'm working on with more routes and services, please take a look at [The Ends  - Ecommerce Backend](https://github.com/Ceejaymar/TheEnds-ecommerce-backend).

Thank you! 