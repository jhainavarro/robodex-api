const env = require('env-var');

module.exports = [
  {
    name: 'default',
    type: env.get('DB_TYPE').required().asString(),
    host: env.get('DB_HOST').required().asString(),
    port: env.get('DB_PORT').required().asInt(),
    username: env.get('DB_USERNAME').required().asString(),
    password: env.get('DB_PASSWORD').asString(),
    database: env.get('DB_DATABASE').required().asString(),
    logging: env.get('DB_LOGGING').default('false').asBool(),
    entities: ['./dist/**/entities/*.js'],
    migrations: ['./dist/db/migrations/**/*.js'],
    cli: {
      migrationsDir: './dist/db/migrations',
    },
  },
];
