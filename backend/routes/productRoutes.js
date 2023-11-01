import express from 'express';
const router = express.Router()
import { 
    getAllProducts,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
 } from '../controllers/productController.js';
 import { isAuthorizedUser } from '../middleware/authMiddleware.js';

router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/new/product').post(isAuthorizedUser, createNewProduct);
router.route('/product/update/:id').put(isAuthorizedUser, updateProduct);
router.route('/product/delete/:id').delete(isAuthorizedUser, deleteProduct);

export default router;
