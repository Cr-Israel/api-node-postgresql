import db from '../conn/database'

export async function update (req, res) {
  const { id } = req.params
  const { productName, quantity, price } = req.body

  const newProduct = await db.query(
    'UPDATE products SET productName = $1, quantity = $2, price = $3 WHERE productId = $4',
    [productName, quantity, price, id]
  )

  res.status(200).send({ message: 'Product Updated Successfully!', newProduct })
}
