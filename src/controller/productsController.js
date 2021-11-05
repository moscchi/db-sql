const getProductsService = require('../services/getProducts');
const addProductService = require('../services/postProduct');


const getProducts = async (_, res) => {
    try {
        const products = await getProductsService();
        res.render("main", {products});
    } catch (e) {
        console.log(e);
    }
};

const addProduct = async (req, res) =>{
    try {
        const newObj = await addProductService(req);
        const products = await getProductsService();
        isActive = true;
        res.render("main", {products});
    } catch (e) {
        console.log(e);
    }
}

module.exports = {getProducts, addProduct};