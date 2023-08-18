const superjet = require('superjet/server');
const config = require('./config');

// We need to operate in UTC
process.env.TZ = 'UTC';

superjet.init(config);

superjet.router.get('/me', async (req, res) => {
  const providerUser = await superjet.db
    .table('provider_users')
    .where('user_id', req.user.id)
    .first();

  res.json({
    user: req.user,
    provider_user: providerUser,
  });
});

superjet.start();
