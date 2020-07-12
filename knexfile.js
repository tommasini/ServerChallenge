module.exports = {
  development: {
    client: "pg",
    connection: {
      port: "5432",
      host: "192.168.99.100",
      user: "postgres",
      password: "docker",
      database: "lisgo"
    },
    migrations: {
      directory: "./src/database/migrations",
      tableName: "knex_migrations",
    },
  },
};
