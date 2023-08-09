import expressPromiseRouter from 'express-promise-router'
import { createProduct } from '../controllers/create.js'
import { listAllProducts } from '../controllers/listAll.js'
import { findById } from '../controllers/findById.js'
import { update } from '../controllers/update.js'

const router = expressPromiseRouter()

router.post('/products', createProduct)
router.get('/products', listAllProducts)
router.get('/products/:id', findById)
router.put('/products/update/:id', update)

export default router
