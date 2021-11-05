const eldiv = document.getElementById('productos')


const addProduct = pr =>{
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
    eldiv.innerHTML = "";
    arg.forEach((pr)=>addProduct(pr));
}

const addMsj = msj => {
    output.innerHTML += `<p>${msj.username}: ${msj.message}`;
}

const loadMsj = msjs => {
    output.innerHTML = "";
    msjs.forEach(msj => addMsj(msj));
}