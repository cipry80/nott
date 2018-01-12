### nott

A starter for React applications. Based on CRA + Node (Express REST APIs) backend.

#### How to start

1. Run `npm i` in root folder
2. `cd` in `server` folder and run `npm i`
3. `cd` in `client` folder and run `npm i`
4. Start the app by running `npm start` in root folder
5. You can run only the server with `npm run start:server` in root folder or `npm start` in `server` folder
6. You can run only the the client with `npm run start:client` in root folder or `npm start` in `client` folder

#### Needs

1. Make sure you install `watchman` (can fail on OSX) - `brew install watchman` (see more details [here](https://github.com/facebookincubator/create-react-app/issues/871)).


#### Ideas to include/not to include

1. GraphQL backend
2. Link a DB. Maybe a combination of PostgreSQL + Mongo? (use ORMs - Sequelize + Mongoose)
3. To discuss on client side:
  - https://github.com/thejameskyle/react-loadable
  - https://github.com/maisano/react-router-transition
  - https://nemethgergely.com/puppeteer-browser-automation/ 
