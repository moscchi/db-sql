const knex = require('knex')({client: 'mysql',
connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'admin',
    database: 'coder_house'
},
pool: {min:0, max:7}});

const addProductService = async (req) => {
    const { title, price, thumbnail } = req.body;
    const objeto = { title, price, thumbnail };
    await knex('productos').insert(objeto)
      .then( () => { console.log('data insertada');})
      .catch( (err) => { console.log(err); throw err})
/*     s  return objeto; */
}

module.exports = addProductService;