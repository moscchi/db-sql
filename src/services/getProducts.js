const options = require('../database/productos/index')
const knex = require('knex')({client: 'mysql',
connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'coder_house'
},
pool: {min:0, max:7}});

const getProductsService = async () => {
  const productos = knex.from('productos').select('*')
    .catch(err => console.log(err))
    /* .finally(() => knex.destroy()); */
  return productos;
  }

module.exports = getProductsService;
