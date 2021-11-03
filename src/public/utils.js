const eldiv = document.getElementById('productos')


const addProduct = pr =>{
    console.log(pr);
    eldiv.innerHTML += `<div class='products-cards'>
                                <h3>${pr.title} | #${pr.id}</h3>
                                <p>$${pr.price}</p>
                                <img src="${pr.thumbnail}">
                            </div>
                            <br>
                    `
}

const loadProduct = (arg) => {
    if(arg == undefined) return;
    arg.forEach((pr)=>addProduct(pr));
}