async function up(db) {
  await db.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('token', 200).defaultTo(null);
    table.datetime('created_at').notNullable();
    table.datetime('updated_at').notNullable();
    table.unique(['token']);
  });

  await db.schema.createTable('provider_users', (table) => {
    table.increments('id');
    table.string('provider', 20).notNullable();
    table.string('provider_user_id', 255).notNullable();
    table.integer('user_id').notNullable();
    table.datetime('created_at').notNullable();
    table.datetime('updated_at').notNullable();
    table.unique(['provider', 'provider_user_id']);
  });
}

async function down(db) {
  await db.schema.dropTable('users');
  await db.schema.dropTable('provider_users');
}

exports.up = up;
exports.down = down;
