module.exports = {
  // Will be used if process.env.NODE_ENV == development
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/db/dev.sqlite3',
    },
    useNullAsDefault: true,
    debug: true,
  },

  // Will be used if process.env.NODE_ENV == production
  production: {
    client: 'postgresql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: true,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migration: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    debug: false,
  },
};
