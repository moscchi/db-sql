const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const cors = require('cors');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('../routes/index');
const getProductsService = require('../services/getProducts');
const addProductService = require('../services/postProduct');

let products = async () => {
    const pr = await getProductsService();
/*     let productos = [pr] */
    return pr; 
}
/* let products = ['hola', 'chau'] */

const server = express();
const httpServer = new HttpServer(server);
const io = new IOServer(httpServer);


server.use(cors("*"));
server.use(express.json());
server.use(express.urlencoded({extended: true}));
server.engine('.hbs', exphbs(
    {
        extname: '.hbs',
        defaultLayout: 'main.hbs',
        layoutsDir: path.join(__dirname,'../public'),
        partialsDir: path.join(__dirname, '../views/partials')
    }));
    server.set('view engine', 'hbs');
    server.set('views', path.join(__dirname,'../public/'));
    server.use(routes); 
 server.use(express.static(path.join(__dirname,'../public'))); 

 io.on('connection', (socket) => {
     console.log('Usuario conectado.', socket.id);
     
     products().then(prods => {
         socket.emit('server:loadProducts', prods);
     })
        socket.on('client:saveproduct', async (data) => {
            console.log('en el server', data);
            const producto = {
                body: {
                    title: data.title,
                    price: data.price,
                    thumbnail: data.thumbnail,
                }
            }
            await addProductService(producto);
            console.log(producto);
            products().then(produs =>{
                produs.push(producto)
                console.log(produs);
                socket.emit('server:loadNewProducts', produs);
            })

            
        })

 })
module.exports = httpServer;
  