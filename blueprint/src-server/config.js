const isDev = process.argv.includes('--dev');

const config = {
  dev: isDev,
  host: 'http://localhost:8080/',
  port: 3000,
  db: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/db/database.sqlite`,
    },
    useNullAsDefault: true,
  },
  auth: {
    test: isDev,
    google: {
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
    },
    facebook: {
      clientId: 'CLIENT_ID',
      clientSecret: 'CLIENT_SECRET',
    },
  },
};

module.exports = config;
