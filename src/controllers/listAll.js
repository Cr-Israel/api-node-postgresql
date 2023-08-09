import db from '../conn/database'

export async function listAllProducts (req, res) {
  const products = await db.query('SELECT * FROM products ORDER BY productName ASC')
  res.status(200).send(products.rows)
}
