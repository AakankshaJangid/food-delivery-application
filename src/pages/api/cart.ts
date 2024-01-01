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

async function getCartItems() {
  try {
    const cartItemsResult = await client.query('SELECT * FROM cartItems');
    return { cartItems: cartItemsResult.rows };
  } catch (error) {
    console.error(error);
  }
}

async function addToCart({ name, price, img }) {
  try {
    const result = await client.query(
      'INSERT INTO cartItems (name, price, img) VALUES ($1, $2, $3) RETURNING name, price, img',
      [name, price, img]
    );
    return result.rows;
  } catch (error) {
    console.error(error);
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, price, img } = req.body;

    if (name && price && img) {
      const item = await addToCart({ name, price, img });
      res.status(201).json(item);
    } else {
      res.status(400).json({ message: 'Incomplete data for adding to cart' });
    }
  } else if (req.method === 'GET') {
    const cartItems = await getCartItems();
    console.log(cartItems); // Logging the cartItems data
    res.status(200).json(cartItems);
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
