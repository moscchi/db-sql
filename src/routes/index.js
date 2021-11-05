const express = require('express');
const {addProduct, getProducts} = require('../controller/productsController')

const router = express.Router();

router.get('/productos', getProducts);
router.post('/productos', addProduct);


module.exports = router;