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
    return pr; 
}

let msjs = [];
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
     socket.emit('server:newmessage', msjs);
     (async()=>{
         const prods = await getProductsService();
         socket.emit('server:loadProducts', prods);
    })();
       socket.on('client:saveproduct', async (data) => {
            const producto = {
                body: {
                    title: data.title,
                    price: data.price,
                    thumbnail: data.thumbnail,
                }
            }
            await addProductService(producto);
            products().then(produs => {
                io.emit('server:loadnewproducts', produs);
            })
        })
        socket.on('client:mensaje', data => {
            const msje = {
                username: data.username,
                message: data.message
            };
            msjs.push(msje);
            io.emit('server:newmessage', msjs);
        })
        })
module.exports = httpServer;
  