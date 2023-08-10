import expressPromiseRouter from 'express-promise-router'
import { createProduct } from '../controllers/create.js'
import { listAllProducts } from '../controllers/listAll.js'
import { findById } from '../controllers/findById.js'
import { update } from '../controllers/update.js'
import { remove } from '../controllers/remove.js'

const router = expressPromiseRouter()

router.get('/api', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Welcome to API Node.js + PostgreSQL!',
    version: '1.0.0'
  })
})
router.post('/products', createProduct)
router.get('/products', listAllProducts)
router.get('/products/:id', findById)
router.put('/products/:id', update)
router.delete('/products/:id', remove)

export default router
