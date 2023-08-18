const migrator = require('superjet/server/migrator');
const config = require('../config');

migrator.init({
  path: `${__dirname}/migrations`,
  stub: `${__dirname}/migrations/migration.stub`,
  db: config.db,
});

async function main() {
  const [command, ...args] = process.argv.slice(2);

  if (!migrator[command]) throw new Error('Invalid command');

  await migrator[command](...args);

  migrator.closeDb();
}

main().catch((err) => {
  console.log('❌', 'Error:', err.message);
  process.exit(1);
});

