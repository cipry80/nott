### nott

A starter for React applications. Based on CRA + Node (Express REST APIs) backend.

#### How to start

1. Run `npm i` or `yarn install` in root folder
2. `cd` in `server` folder and run `npm i` or `yarn install`
3. `cd` in `client` folder and run `npm i` or `yarn install`
4. Start the app by running `npm start` or `yarn install` in root folder
5. You can run only the server with `npm run start:server` (or `yarn run start:client`) in root folder or `npm start` (or `yarn start`) in `server` folder
6. You can run only the the client with `npm run start:client` (or `yarn run start:client`) in root folder or `npm start` (or `yarn start`) in `client` folder

**Important info:** make sure you create a `.env` file in the root of the `server` folder by using the `.env_template` file. This will act as the centralised list for all ENV variables.

#### Working with Sequelize CLI

You can choose to install `sequelize-cli` globally or keep the local instalation provided by `package.json`. If you install `sequelize-cli` globally (e.g.: `npm i -g sequelize-cli`), you will be able to run all Sequelize related commands (e.g.: migrations) like so:

    sequelize db:migrate

If you prefer local installation (does not pollute the system), use the following command:

    npm run sequelize db:migrate

If you need to pass arguments to the local instalation of `sequelize-cli` (e.g.: creating a new model), make sure to prefix all commands with '--'. E.g.:

    npm run sequelize -- model:create --name User --attributes "first_name:string last_name:string"

#### Database connections

**Postgres**

1. Make sure you have `postgres` installed. OSX users can simply do that via `brew install postgres`.
2. Fill in the database related ENV variables with the right info.
3. Start Postgres server: `postgres -D /usr/local/var/postgres` (you can alias this)
4. Run `npm run sequelize db:migrate` or `sequelize db:migrate` if you have `sequelize-cli` installed globally (check [Working with Sequelize CLI](https://github.com/r31gN/nott/tree/db_postgres_sequelize#working-with-sequelize-cli) section above).

#### Needs

1. Make sure you install `watchman` (can fail on OSX) - `brew install watchman` (see more details [here](https://github.com/facebookincubator/create-react-app/issues/871)).

#### Ideas to include/not to include

1. GraphQL backend
2. Link a DB. Maybe a combination of PostgreSQL + Mongo? (use ORMs - Sequelize + Mongoose)
3. To discuss on client side:

* https://github.com/thejameskyle/react-loadable
* https://github.com/maisano/react-router-transition
* https://nemethgergely.com/puppeteer-browser-automation/
