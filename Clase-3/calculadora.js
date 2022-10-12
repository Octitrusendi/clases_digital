const sumar = require('./sumar');
const restar = require('./restar');
const dividirl = require('./dividir');
const multiplicar = require('./multiplicar');


console.log(sumar(0,1));
console.log(multiplicar(0,1));
console.log(dividirl(0,1));
console.log(restar(0,1));


function dominio(string){
        return "http://" + string;
    }
    
    console.log(dominio("digitalhouse.com.ar"));
    let frase = 'Hola!, soy Carli';

    let licenciada = frase.slice(10,16);
    console.log(licenciada)