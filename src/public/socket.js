const socket = io();
/* const eldiv = document.getElementById('productos') */

socket.on('connection', console.log('on desde client'))
socket.on('server:loadProducts', prods => {
    console.log(prods, 'este es el ');
    loadProduct(prods);
});
const saveProduct = (title, price, thumbnail) => {
    console.log(title, price, thumbnail);
    socket.emit('client:saveproduct', {
        title,
        price,
        thumbnail
    })
    socket.on('server:loadNewProducts', produs => {
        console.log(produs, 'aca en el nuevo');
        eldiv.innerHTML = '';
        loadProduct(produs);
    });
}