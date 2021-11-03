const title = document.getElementById('title');
const price = document.getElementById('price');
const thumbnail = document.getElementById('thumbnail');
const productForm = document.getElementById('product-form');

function evento(e){
    e.preventDefault()
    console.log('entre al form');
    saveProduct(title.value, price.value, thumbnail.value);
}
