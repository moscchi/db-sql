const fs = require('fs');

const getProductsService = async () => {
    try {
      const objs = await fs.promises.readFile("src/database/productos.txt", "utf-8");
      return JSON.parse(objs);
    } catch (err) {
      return { error: 'Productos no encontrados'};
    }
}

module.exports = getProductsService;
