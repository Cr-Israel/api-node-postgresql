import db from '../conn/database.js'

export async function createProduct (req, res) {
  const { productName, quantity, price } = req.body
  const { rows } = await db.query(
    'INSERT INTO products (productName, quantity, price) VALUES ($1, $2, $3)',
    [productName, quantity, price]
  )

  res.status(201).send({
    message: 'Product added successfully!',
    body: {
      product: { productName, quantity, price }
    }
  })
}
