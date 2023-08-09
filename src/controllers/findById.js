import db from '../conn/database'

export async function findById (req, res) {
//   const productId = parseInt(req.params.id)
  const { id } = req.params

  const product = await db.query('SELECT * FROM products WHERE productId = $1', [id])
  res.status(200).send(product.rows)
}
