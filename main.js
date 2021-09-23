// Bienvenida
alert('¡Bienvenido/a a nuestro sitio de compras!')
// Creo la clase Pasajes

class Pasajes{

    constructor(destino, precio, stock) {
        this.destino = destino;
        
        this.precio = precio;

        this.stock = stock;

        }
        impuestoPais() {
            this.precio = this.precio * 1.35;}
 }

// Creo el array Carrito que estará compuesto por los pasajes que el usuario desee comprar
const carrito = [];

//Creo mis objetos o productos

const barcelona = new Pasajes('Barcelona', 95923, 23);
const sanAndres = new Pasajes('San Andrés', 89563, 7);
const toronto = new Pasajes('Toronto', 120325, 17);
const berlin = new Pasajes('Berlin', 118699, 52);

barcelona.impuestoPais ();
toronto.impuestoPais ();
sanAndres.impuestoPais ();
berlin.impuestoPais ();



// Comprar pasajes
let importeAPagar = 0;

let indiqueDestino = prompt('Ingresá el destino al que querés viajar - ESC para salir');   
while (indiqueDestino != 'ESC'){

    switch (indiqueDestino) {
        case 'BARCELONA':
            carrito.push({barcelona});
            importeAPagar += barcelona.precio;
            alert('Agregaste un pasaje a Barcelona en tu carro por un valor final de $ ' + barcelona.precio);
            break;
        
        case 'SAN ANDRES':
            carrito.push({sanAndres});
            importeAPagar += sanAndres.precio;
            alert('Agregaste un pasaje a San Andrés en tu carro por un valor final de $ ' + sanAndres.precio);
            break;

        case 'TORONTO':
            carrito.push({toronto});
            importeAPagar += toronto.precio;
            alert('Agregaste un pasaje a Toronto en tu carro por un valor final de $ ' + toronto.precio);
            break;

        case 'BERLIN':
            carrito.push({berlin});
            importeAPagar += berlin.precio;
            alert('Agregaste un pasaje a Berlín en tu carro por un valor final de $ ' + berlin.precio);
            break;

        default:
            alert ('Ese destino no se encuentra en precios de oferta por ahora')
            break;
    }
    indiqueDestino = prompt('Ingrese otro o ESC para finalizar compra y te redirigiremos a la página de pago');
}

alert('El importe total de tu compra es de $ ' + importeAPagar);

// carrito.forEach(i => {
//     carroTotal += i.*.precio;
// });

// console.log(carroTotal);

// const carritoTotal = carrito.reduce((a,b) => a.precio + b.precio);
// console.log(carritoTotal);

// const carritoTotal = carrito.map(a, b => a.precio + b.precio);

// console.log(carritoTotal);


// if (ingreseDisco == 'ESC') {
//     alert('Gracias por pasar, te esperamos la próxima')
// }