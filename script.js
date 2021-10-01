import { articulo } from './data.js'

const card = document.querySelector('#cards')
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const items = document.getElementById('items');

document.addEventListener('DOMContentLoaded', () => {
    loadArticulo(articulo)
})

function loadArticulo(articulo) {
    card.innerHTML = ''
   console.log(articulo)
    articulo.forEach((data) => {
        const items = document.createElement('div')
        //const { name, image } = data
        items.innerHTML = `
        
            <div class="col d-flex justify-content-center mb-4">
                <div class="card shadow mb-1 bg-dark rounded text-white " style="width: 16rem;">
                    <h5 class="card-title text-center pt-2">${data.name}</h5>
                    <img src=${data.image} class="card-img-top" alt="...">
                    <div class="card-body">
                        <p class="card-text text-white-50 description">${data.descripcion}</p>
                        <h5 class="text-primary">Precio: <span class="precio">${data.precio}</span></h5>
                        <div class="d-grid gap-2">
                            <button class="btn btn-primary button" id="btnClick">Añadir a Carrito</button>
                        </div>
                    </div>
                </div>
            </div> 
        `

            


        card.appendChild(items)
    });
}