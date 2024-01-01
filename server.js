const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'food_delivery_db',
  password: 'jangid01',
  port: 5432, // or your PostgreSQL port number
});

// Connect to the PostgreSQL database
client.connect();

app.get('/api/foodItems', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM foodItems');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
