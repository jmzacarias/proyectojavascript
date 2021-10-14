

// //Creo el array "productos" donde se agruparán los objetos de la clase "Pasajes"
const productos = [];

let importeAPagar = 0;

// // Creo la clase Pasajes
class Pasajes{

    constructor(id, destino, precio, stock) {
        this.id = id;

        this.destino = destino;
        
        this.precio = precio;

        this.stock = stock;

        }
    
        impuestoPais() {
            this.precio = this.precio * 1.35;};
        
 }

// // Creo el array Carrito que estará compuesto por los pasajes que el usuario desee comprar
const carrito = [];

// //Creo mis objetos o productos

const barcelona = new Pasajes(1, 'Barcelona', 95923, 23);
const sanAndres = new Pasajes(2, 'San Andrés', 89563, 7);
const toronto = new Pasajes(3, 'Toronto', 120325, 17);
const berlin = new Pasajes(4, 'Berlin', 118699, 52);

let barcelonaImpuesto = barcelona.impuestoPais ();
let torontoImpuesto = toronto.impuestoPais ();
let sanAndresImpuesto = sanAndres.impuestoPais ();
let berlinImpuesto = berlin.impuestoPais ();

productos.push({barcelona});
productos.push({toronto});
productos.push({sanAndres});
productos.push({berlin});

console.log(productos);


// // Traigo del HTML los elementos del DOM con los cuales JS va a interactuar
const botonBarcelona = document.getElementById("js-pasajeBarcelona");
const botonToronto = document.getElementById("js-pasajeToronto");
const botonSanAndres = document.getElementById("js-pasajeSanAndres");
const botonBerlin = document.getElementById("js-pasajeBerlin");

const textoCarrito = "Agregaste al carrito: \n";
// const mostrarCarrito = ()=> {
//         carrito.forEach((pasaje)=>{
//         textoCarrito += "1 pasaje a " + pasaje.destino + "por $" + pasaje.precio + "\n"
// });
//  return textoCarrito;
// };

 

botonBarcelona.addEventListener('click', () => {
    carrito.push({barcelona});
    importeAPagar += barcelona.precio;
    console.log(carrito);
    if(carrito.length == 1) {
        $('#js-carrito').append(` 
        <div class="cart">
             <h4>Carrito de compras:</h4>
             <div id="js-agregados" class="agregados">
                <p>- 1 pasaje a ${barcelona.destino} por $${barcelona.precio}</p>
             </div>
             <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
        </div>
        `);
    } 
    else if(carrito.length >= 2) {
        $('#js-agregados').append(` 
        <p>- 1 pasaje a ${barcelona.destino} por $${barcelona.precio}</p>
        `);
    }
})

botonToronto.addEventListener('click', () => {
    carrito.push({toronto});
    importeAPagar += toronto.precio;
    console.log(carrito);
    if(carrito.length == 1) {
        $('#js-carrito').append(` 
        <div class="cart">
             <h4>Carrito de compras:</h4>
             <div id="js-agregados" class="agregados">
                <p>- 1 pasaje a ${toronto.destino} por $${toronto.precio}</p>
             </div>
             <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
        </div>
        `);
    } 
    else if(carrito.length >= 2) {
        $('#js-agregados').append(` 
        <p>- 1 pasaje a ${toronto.destino} por $${toronto.precio}</p>
        `);
    }
})

botonSanAndres.addEventListener('click', () => {
    carrito.push({sanAndres});
    importeAPagar += sanAndres.precio;
    console.log(carrito);
    if(carrito.length == 1) {
        $('#js-carrito').append(` 
        <div class="cart">
             <h4>Carrito de compras:</h4>
             <div id="js-agregados" class="agregados">
                <p>- 1 pasaje a ${sanAndres.destino} por $${sanAndres.precio}</p>
             </div>
             <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
        </div>
        `);
    } 
    else if(carrito.length >= 2) {
        $('#js-agregados').append(` 
        <p>- 1 pasaje a ${sanAndres.destino} por $${sanAndres.precio}</p>
        `);
    }
})

botonBerlin.addEventListener('click', () => {
    carrito.push({berlin});
    importeAPagar += berlin.precio;
    console.log(carrito);
    // mostrarCarrito();
    if(carrito.length == 1) {
        $('#js-carrito').append(` 
        <div class="cart">
             <h4>Carrito de compras:</h4>
             <div id="js-agregados" class="agregados">
                <p>- 1 pasaje a ${berlin.destino} por $${berlin.precio}</p>
             </div>
             <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
        </div>
        `);
    } 
    else if(carrito.length >= 2) {
        $('#js-agregados').append(` 
        <p>- 1 pasaje a ${berlin.destino} por $${berlin.precio}</p>
        `);
    }    
})
    
let buttonFinalizar = document.getElementById("js-botonFinalizar");

buttonFinalizar.addEventListener('click', ()=>{
    let totalCompra = document.createElement("div");
    totalCompra.innerHTML = "El Total de tu compra es $ " + importeAPagar;
    totalCompra.classList.add("importe");
    document.body.appendChild (totalCompra);
 })

const guardarLocal = (productos,precio) => {localStorage.setItem(productos,precio)};

guardarLocal('listaProductos',JSON.stringify(productos));


// const agregarCarrito = () => {for(const producto of carrito){
//     $('#js-carrito').append(` 
//     <div class="cart">
//          <h4>Pasajes agregados:</h4>
//          <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
//     </div>
//     `);
// }
// }
//     $(`js-pasaje${pasaje.destino}`).on('click', function(){
//         $('#js-ofertas').append(`<p>Agregaste al carrito tu pasaje a ${producto.destino}</p>`);
//     });
// }
// const insertInput = document.getElementById("js-insertInput");
// const inputBusqueda = document.getElementById("js-barraBusqueda__input");
// let buttonBusqueda = document.getElementById("js-botonBusqueda");

// const inputBusquedaValor = inputBusqueda.value
//Funcion para desplegar el input de selección pasaje al pulsar el boton (incluye en HTML elementos que no existen en el archivo en si y elimina otros)
//  boton.addEventListener('click', () => {

//     insertInput.innerHTML = `
//                 <div class="barraBusqueda">
//                     <input type="text" placeholder="Escribí el destino a donde querés ir" class="barraBusqueda__input" id="js-barraBusqueda__input">
//                     <input type="submit" value="agregar pasaje al carrito" class="botonBusqueda" id="js-botonBusqueda">
//                 </div> `   
//                     // <button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>
//                 ;

//     boton.parentNode.removeChild(boton);
//  });

///////////////////////////////////////////////////////
// const agregarCarrito = (seleccion) => {
//     const opcion = 
//     productos.find(product=>productos.destino === seleccion)
//     carrito = localStorage.getItem('importe')

//     if(!carrito){
//         carrito = [];
//     }
//     else{
//         carrito = JSON.parse(carrito);
//     }

//     carrito.push(opcion);

//     console.log(carrito);

//     // insertInput.innerHTML = `<button class="botonFinalizar" id="js-botonFinalizar">Finalizar compra</button>`;
                
//     // const inputBusquedaValor = inputBusqueda.value

//     // console.log(inputBusquedaValor);
// }

// buttonBusqueda.addEventListener('click', filterProduct);
//Evento para escuchar lo ingresado por el usuario en el input.

// buttonBusqueda.addEventListener('click', () => {})
//     while (inputBusquedaValor != 'ESC'){

//         switch (inputBusquedaValor) {
//             case 'BARCELONA':
//                 carrito.push({barcelona});
//                 importeAPagar += barcelona.precio;
//                 alert('Agregaste un pasaje a Barcelona en tu carro por un valor final de $ ' + barcelona.precio);
//                 break;
            
//             case 'SAN ANDRES':
//                 carrito.push({sanAndres});
//                 importeAPagar += sanAndres.precio;
//                 alert('Agregaste un pasaje a San Andrés en tu carro por un valor final de $ ' + sanAndres.precio);
//                 break;
    
//             case 'TORONTO':
//                 carrito.push({toronto});
//                 importeAPagar += toronto.precio;
//                 alert('Agregaste un pasaje a Toronto en tu carro por un valor final de $ ' + toronto.precio);
//                 break;
    
//             case 'BERLIN':
//                 carrito.push({berlin});
//                 importeAPagar += berlin.precio;
//                 alert('Agregaste un pasaje a Berlín en tu carro por un valor final de $ ' + berlin.precio);
//                 break;
    
//             default:
//                 alert ('Ese destino no se encuentra en precios de oferta por ahora')
//                 break;
//         }
//         indiqueDestino = prompt('Ingrese otro o ESC para finalizar compra y te redirigiremos a la página de pago');
    
// }
// })


// let indiqueDestino = prompt('Ingresá el destino al que querés viajar - ESC para salir');   

    
// buttonBusqueda.addEventListener('click', agregarCompra)
// let totalCompra = document.createElement("div");
// totalCompra.innerHTML = "El Total de tu compra es $ " + importeAPagar;
// totalCompra.classList.add("importe");
// document.body.appendChild (totalCompra);
// })
