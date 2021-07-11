const { Pool } = require('pg');
require('dotenv').config();

// const developmentConfig = {
//    user: process.env.PG_USER,
//    password: process.env.PG_PASSWORD,
//    host: process.env.PG_HOST,
//    port: process.env.PG_PORT,
//    database: process.env.PG_DATABASE,
// };

const developmentConfig = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;
const productionConfig = process.env.DATABASE_URL; // from heruko add-ons, heruko provided the environment variable

const pool = new Pool({
   connectionString: process.env.NODE_ENV === 'production' ? productionConfig : developmentConfig,
});

module.exports = pool;
