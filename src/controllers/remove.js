import db from '../conn/database'

export async function remove (req, res) {
  const { id } = req.params

  const deletedProduct = await db.query(
    'DELETE FROM products WHERE productID = $1', [id]
  )

  res.status(200).send({ message: 'Product deleted successfully!' })
}
