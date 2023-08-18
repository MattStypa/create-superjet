# Superjet

Superjet is a set of complementery client and server packages that make developing Vue 3
applications with authentication very fast and very easy.

It uses external authentication providers like Google and Facebook to remove the need for complex
but necessery functionality like email confirmation and forgotten password recovery.

## Commands

### Development
- `npm start` - Starts client and server in development mode
- `npm run lint` - Runs linter
- `npm run app.dev` - Starts client in development mode
- `npm run server.dev` - Starts server in development mode

### Production
- `npm run app.build` - Builds production client bundle
- `npm run server.prod` - Starts server in production mode

### Migrations
- `npm run migration` - Runs all pending migrations
- `npm run migration.status` - Show completed and pending migrations
- `npm run migration.new {name}` - Creates a new migration
- `npm run migration.rollback` - Reverts last completed migration batch
- `npm run migration.up` - Runs the next pending migration
- `npm run migration.down` - Reverts last completed migration
- `npm run migration.up {name}` - Runs named migration
- `npm run migration.down {name}` - Reverts named migration
- `npm run migration.down` - Reverts last completed migration
- `npm run migration.reset` - Reverts all completed migrations
