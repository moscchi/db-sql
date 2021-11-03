const fs = require('fs');
const getProductsService = require('./getProducts');

const addProductService = async (req) => {
    console.log('Entre al service');
    const { title, price, thumbnail } = req.body;
    const objs = await getProductsService();
    let newId;
    if (!objs.length) {
      newId = 1;
    } else {
      newId = objs[objs.length - 1].id + 1;
    }
    const objeto = { title, price, thumbnail, id: newId };
    objs.push(objeto);
    console.log(objeto);
    try {
      await fs.promises.writeFile("src/database/productos.txt", JSON.stringify(objs, null, 2));
      return objeto;
    } catch (err) {
      throw new Error(`Error al guardar: ${error}`);
    }
}

module.exports = addProductService;