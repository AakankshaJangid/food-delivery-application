import { Client } from 'pg';
import { NextApiRequest, NextApiResponse } from 'next';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'food_delivery_db',
  password: 'jangid01',
  port: 5432, // or your PostgreSQL port number
});

// Connect to the PostgreSQL database
client.connect();

async function getFoodItems() {
  try {
    const foodItemsResult = await client.query('SELECT * FROM foodItems');
    const restaurantsResult = await client.query('SELECT * FROM restaurants');
    const usersResult = await client.query('SELECT * FROM users');
    return { foodItems: foodItemsResult.rows, restaurants: restaurantsResult.rows, users: usersResult.rows };
  } catch (error) {
    console.error(error);
  }
}

async function createUser({ name, email, password }) {
  try {
    const result = await client.query(
      'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING email, password',
      [name, email, password]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
  }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const data = await getFoodItems();
    res.status(200).json(data);
  } else if (req.method === 'POST') {
    const { name, email, password } = req.body;
    const user = await createUser({ name, email, password });
    res.status(201).json(user);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
