const sqlite = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    },
    useNullAsDefault: true
});

const addProductService = async (req) => {
    const { title, price, thumbnail } = req.body;
    const objeto = { title, price, thumbnail };
    await knex('productos').insert(objeto)
      .then( () => { console.log('data insertada');})
      .catch( (err) => { console.log(err); throw err})
/*     s  return objeto; */
}

module.exports = addProductService;