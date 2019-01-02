import bk from 'bookshelf';
import knex from 'knex';
import knexConfig from './knexfile';

export const config = knexConfig[process.env.NODE_ENV];
export const bookshelf = bk(knex(config));
export const db = knex(config);

// Export constructor and config object
export default {
  db,
  config,
  bookshelf,
};
