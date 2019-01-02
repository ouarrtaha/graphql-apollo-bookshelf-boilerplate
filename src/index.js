// NPM
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import * as chalk from 'chalk';
import path from 'path';

// Project
import config from './config';
import schema from './graphql';
import Models from './models';


const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Api started!',
  });
});

// Context object to be passed to server
const context = {
  ...Models,
};

// Create Apollo & GraphQl server
const server = new ApolloServer({
  schema,
  context,
  cacheControl: true,
  playground: false,
});

server.applyMiddleware({
  app,
  cors: true,
  path: '/graphql',
});

// Create Apollo playground
const playground = new ApolloServer({
  schema,
  context,
  cacheControl: false,
  playground: true,
});

playground.applyMiddleware({
  app,
  cors: true,
  path: '/graphiql',
});


// Run server
app.listen(config.PORT, () => {
  console.log('\n');
  console.log(chalk.bgGreen.black(`Server listening on http://localhost:${config.PORT}/ ..`));
  console.log('\n');

  console.log(`${chalk.blue('/graphql')}  - endpoint for queries`);
  console.log(`${chalk.blue('/graphiql')} - endpoint for testing`);
  console.log('\n');
});

export default app;
