const pgp = require('pg-promise')();
const connectionOptions = {
  connectionString: 'postgres://devwinston35:jaIKT8DCu1np@ep-hidden-salad-234308.us-west-2.aws.neon.tech/neondb?options=project%3Dep-hidden-salad-234308&sslmode=require',
};

const db = pgp(connectionOptions);

module.exports = db;
