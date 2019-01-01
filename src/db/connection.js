const knex = require('knex')
const knex_config = require('./knexfile.js')
const bookshelf = require('bookshelf')(knex(knex_config[process.env.NODE_ENV]));
const db = knex(config)


// Export constructor and config object
module.exports = {
    db,
    config,
    bookshelf
}
