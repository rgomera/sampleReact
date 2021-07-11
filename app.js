const express = require('express');
const pool = require('./db');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// serve static file only in production
if (process.env.NODE_ENV === 'production') {
   app.use(express.static('client/build'));
}

app.get('/users', async (req, res) => {
   try {
      const users = await pool.query('SELECT * FROM users');
      res.json(users.rows);
   } catch (err) {
      console.error(err.message);
   }
});

app.listen(PORT, () => console.log(`server is now listening at ${PORT}`));
