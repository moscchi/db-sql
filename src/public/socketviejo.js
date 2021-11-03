/* const socket = io();
 */

/* let products = async () => {
    const pr = await fetch('http://localhost:8080/').then(response=>response.json()).then(products => console.log(products)).catch(e => console.log(e));
    let productos = [];
    productos.push(pr)
    console.log(productos);
    return productos;
} */

/* const loadProduct = async () => {
    try {
        console.log('entre');
        let prs = [];
        let data = await fetch('http://localhost:8080/').then(response=>response.json()).catch(e => console.log(e));
        console.log(data);
        prs.push(data.products);
        console.log(data);
        if(!prs){
            console.log('no hay productos');
        } else {
            console.log('entre al else: ', prs);
            prs.forEach(pd => addProduct(pd));
    }} catch (e) {
        console.log(e);
    }
}
*/
/* const traerProd = (producto) => {
    return fetch('/productos')
        .then(res => res.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template(producto);
            console.log(producto);
            //addProduct(arg)
            console.log(html);
            return html;
        })
}

socket.emit('client:loadProducts', traerProd()) */
/* socket.on('loadProducts', (prods) => {
    loadProduct(...prods);

}) */
/* socket.on('loadProducts', (prods) => {
    for (let i = 0; i < prods.length; i++) {
        loadNotes(prods[i]);
    }
}) */
/* const saveProduct = (title, price, thumbnail) => {
    
    socket.emit('client:newproduct', {
        title,
        price,
        thumbnail
    })
} */
/* socket.on('server:newProduct', addProduct) */

/* socket.on('server:loadNewProducts', loadProduct) */