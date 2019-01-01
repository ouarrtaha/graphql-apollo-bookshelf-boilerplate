require('dotenv').config()

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            host: "172.18.0.2",
            database: "postgres",
            user: "postgres",
            password: "r2d2c3po"
        },
        pool: {
            min: 2,
            max: 10
        },
        migration: {
            tableName: 'knex_migrations',
            directory: './migrations'
        },
        debug: true
    },
    staging: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            ssl: true
        },
        pool: {
            min: 2,
            max: 10
        },
        migration: {
            tableName: 'knex_migrations',
            directory: './migrations'
        },
        debug: true
    },
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            ssl: true
        },
        pool: {
            min: 2,
            max: 10
        },
        migration: {
            tableName: 'knex_migrations',
            directory: './migrations'
        },
        debug: false
    }
}
