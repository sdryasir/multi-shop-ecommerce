import express from 'express';
const router = express.Router()
import { 
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
 } from '../controllers/productController.js';
 import { isAuthenticatedUser, authorizedUser } from '../middleware/authMiddleware.js';

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/new/product').post(isAuthenticatedUser, authorizedUser('admin'),  createNewProduct);
router.route('/product/update/:id').put(isAuthenticatedUser, updateProduct);
router.route('/product/delete/:id').delete(isAuthenticatedUser, deleteProduct);

export default router;
