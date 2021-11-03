const express = require('express');
const {addProduct, getProducts, navigation} = require('../controller/productsController')

const router = express.Router();

router.get('/productos', getProducts);
router.post('/productos', addProduct);
router.get('/', navigation)

module.exports = router;