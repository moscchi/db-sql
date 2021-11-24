const sqlite3 = require('knex')({
    client: 'sqlite3',
    connection: {
      filename: "./mydb.sqlite"
    },
    useNullAsDefault: true
});


sqlite3.schema.createTable('mensajes', table => {
    table.increments('id'),
    table.string('username'),
    table.string('message')
}).then( () => console.log('tabla mensajes creada'))
  .catch((err) => { console.log(err)})
  .finally(() => {
      sqlite3.destroy();
  });

  module.exports = sqlite3;