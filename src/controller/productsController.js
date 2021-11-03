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
        console.log('Entre al controller');
        const newObj = await addProductService(req);
        const products = await getProductsService();
        console.log(newObj);
        isActive = true;
        res.render("main", {products});
    } catch (e) {
        console.log(e);
    }
}

const navigation = async (req, res) => {
    try {
        const products = await getProductsService();
        console.log({products});
        res.json({products})  
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getProducts, addProduct, navigation};