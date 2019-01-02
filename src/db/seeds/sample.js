/* eslint-disable */

exports.seed = function (knex, Promise) {
    return Promise.all([

        // Deletes ALL existing entries
        knex('posts').del(),
        knex('comments').del(),


        // Inserts seed entries
        knex('posts').insert([
            {
                id: 1,
                title: 'Post 1',
                status: 'published'
            },
            {
                id: 2,
                title: 'Post 2',
                status: 'draft'
            },
            {
                id: 3,
                title: 'Post 3',
                status: 'published'
            },

        ]),


        knex('comments').insert([
            {
                id: 1,
                username: 'John',
                comment: 'Hello world',
                post_id: 1
            },
            {
                id: 2,
                username: 'John',
                comment: 'Another comment',
                post_id: 1
            },
            {
                id: 3,
                username: 'Doe',
                comment: 'Test comment',
                post_id: 2
            },
        ])
    ])

};
