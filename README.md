# graphql-apollo-bookshelf-boilerplate

> Simple GraphQL, Apollo Backend w/ Webpack, Babel, ES6, ESLint, Knex, Bookshelf, Hot-Reload Template.
With a ready bookshelf setup. 

![Sample data](https://i.ibb.co/XCS0CF2/Screen-Shot-2019-01-03-at-00-54-15.jpg)


## Includes

- Webpack 4
- Babel (ES6, babel-preset-env)
- Hot-Reload
- ESLint w/ AirBnb style guide
- Express
- graphql-tag (Support for .graphql|.gql files)
- Apollo
- Knex
- Bookshelf ORM 

## Usage

```bash
git clone https://github.com/ouarrtaha/graphql-apollo-bookshelf-boilerplate.git

cd apollo-boilerplate 

# make it to your own
rm -rf .git

npm install

# Build in dev mode
npm run dev

# Start in dev mode with hot reload
npm run start:dev
```


### Config
- Configure a postgres database somewhere
- Replace the connection information for both development and production modes in:
    - `db/connection.js`
- `cd` into the `db` folder and with Knex installed run: 
    - `knex migrate:latest`
    - `knex seed:run`
    
- Head back to root and run: 
```
# Build dev
npm run dev

# Build prod
npm run build

# Hot reload
npm run start:dev

# Build Start --mode production
npm start

# Eslint & fix
npm run lint:fix
```


