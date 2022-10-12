let doble = numero => numero *2;
let triple = numero => numero *3;

let aplicarCallback = (numero, operacion) => operacion(numero);

//console.log(aplicarCallback(2, doble))

let sumar = (numero1, numero2) => numero1 + numero2;
let restar = (numero1, numero2) => numero1 - numero2;
let dividir = (numero1, numero2) => numero1 / numero2;
let multiplicar = (numero1, numero2) => numero1 * numero2;

let calculadora = (numero1, numero2, operacion) => operacion(numero1,numero2);

//console.log(calculadora(2,5,sumar))

/* function concat(array){
    for(let i = 0; i < array.length; i++){
        console.log(array)
    }
}

let agregarHttp = direccionWeb => {
    let resultado = [];
    for (let i = 0; i < direccionWeb.length ; i++){
     resultado.push("http://"+direccionWeb[i]);  

    }return resultado; 
}

let procesar = (array, aplicarCallback) =>(aplicarCallback(array)); */
/* function agregarHttp(url) {
    let resultado = [];
    for (let i = 0; i < url.length ; i++){
     resultado.push("http://"+url[i]);  

    }return resultado; 
}


function procesar(array, aplicarCallback){
    return aplicarCallback(array);
}

let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp);
console.log(urlCompletas);  */


/* 
function agregarHttp(dato) {
    return "http://" + dato
}



function procesar(dato, aplicarCallback){
    if(Array.isArray(dato)){
      let resultado = [];
        for (let i = 0; i < dato.length ; i++){
         resultado.push( aplicarCallback(dato[i]));   
    }return resultado; 
}else{
    return  aplicarCallback(dato);
}

}

let string = procesar("hola",agregarHttp);
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas);   
console.log(string);    */

/* let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(p){
    return p.aprobado == true; 
})
let desaprobados = estudiantes.filter(function(p){
    return p.aprobado == false
})
console.log(aprobados)
console.log(desaprobados) */

/* let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(hora){
    return --hora; 
})

console.log(horariosAtrasados) */

/* let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce(function(acumulador, vuelta){
    return acumulador + vuelta;
})

console.log(totalVueltas); */

/* let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];

let listaDeSupermercado = listaDeSuperMercado.forEach(function(lista){
    console.log(lista);
}) */
function agregarHttp(dato) {
    return "http://" + dato
}

function procesar(dato, aplicarCallback){
    if(Array.isArray(dato)){
      let resultado = [];
        for  (let i of dato){
         resultado.push( aplicarCallback(i));   
    }return resultado; 
}else{
    return  aplicarCallback(dato);
}}

let string = procesar("hola",agregarHttp);
let urlCompletas = procesar(["www.google.com","www.yahoo.com"],agregarHttp)
console.log(urlCompletas);   
console.log(string);   

let mail1 = "octaviotrusendi@gmail.com"
let mail2 = "octaviotrusendi@gmail.com"

resultado = mail1.includes(mail2)
console.log(resultado)
