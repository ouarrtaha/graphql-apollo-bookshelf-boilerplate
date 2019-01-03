import bs from 'bookshelf';
import knex from 'knex';
import knexConfig from './knexfile';

export const config = knexConfig[process.env.NODE_ENV];
export const bookshelf = bs(knex(config));
export const db = knex(config);

export default {
  db,
  config,
  bookshelf,
};
