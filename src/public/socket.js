const socket = io();
/* const eldiv = document.getElementById('productos') */

let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    socket.emit('client:mensaje', {
        username: username.value,
        message: message.value
    });
    message.value = '';
})

socket.on('connection', console.log('on desde client'))
socket.on('server:loadProducts', prods => {
    loadProduct(prods);
});
const saveProduct = (title, price, thumbnail) => {
    socket.emit('client:saveproduct', {
        title,
        price,
        thumbnail
    })
}
socket.on('server:loadnewproducts', prods => {
    eldiv.innerHTML = '';
    loadProduct(prods);
});

socket.on('server:newmessage', msjs => {
    loadMsj(msjs);
})