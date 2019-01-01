const knex = require('knex')
const config = require('./knexfile.js').staging
const bookshelf = require('bookshelf')(knex(config));
const db = knex(config)


// Export constructor and config object
module.exports = {
    db,
    config,
    bookshelf
}
