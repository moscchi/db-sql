const options = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'admin',
        database: 'coder_house'
    },
    pool: {min:0, max:7}
})

/*   mariaDb.schema.createTable('productos', table => {
      table.increments('id')
      table.string('title')
      table.integer('price')
      table.string('thumbnail')
  }).then( () => console.log('tabla productos creada'))
    .catch(err => {console.log(err)})
    .finally(() => mariaDb.destroy()); */

module.exports = { options };