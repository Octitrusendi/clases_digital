const octavioTrusendi = require('./octavio_trusendi');
const luisViloria = require('./luis_viloria');
const Mateo = require('./mateo');
const tomas = require('./tomas');
const fs = require('fs');

const mensaje = fs.readFileSync(__dirname + '/mensaje.txt', 'utf-8')


/* console.log('Hola ' + octavioTrusendi.nombre); */

console.log('Hola soy ' + octavioTrusendi.nombre + ' mi pasatiempo es ' + octavioTrusendi.pasatiempo + ' soy de ' + octavioTrusendi.lugar);
console.log('Hola soy ' + luisViloria.nombre + ' mi pasatiempo es ' + luisViloria.pasatiempo + ' soy de ' + luisViloria.lugar);
console.log('Hola soy ' + tomas.nombre + ' mi pasatiempo es ' + tomas.pasatiempo + ' soy de ' + tomas.lugar);
console.log('Hola soy ' + Mateo.nombre + ' mi pasatiempo es ' + Mateo.pasatiempo + ' soy de ' + Mateo.lugar);

console.log(mensaje);


function ejemplo(saludo){
        return saludo;
    }
    
   console.log( ejemplo("hola, soy una función"));


   function esPar(n){
        let resultado = n %2;
        return resultado == 0;
    
    }
    
    console.log(esPar(4));

    function anterior(numero1){
        return --numero1;
    }
    
    function triple(numero2){
        return numero2 *3;
    }
    function anteriorDelTriple(numero3){
        let resultado = triple(numero3);
        return anterior(resultado);
    }
console.log(anteriorDelTriple(2));
