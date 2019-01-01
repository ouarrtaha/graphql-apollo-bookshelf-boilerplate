
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('posts', function (table){
        table.increments()
        table.string('post')
        table.integer('status')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('post')
};
