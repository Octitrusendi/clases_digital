const autos = require('./autos')
//const persona = require('./persona')


const concesionaria = {
   //persona: persona,
   autos: autos,
   buscarAuto (patente){
        let autos = this.autos;
        let findPatente = autos.find(elemento => elemento.patente == patente);
        if (findPatente === undefined){
                return null
        }return findPatente
   },
   venderAuto (patente){
        let patenteEncontrada = this.buscarAuto(patente);
        if (patenteEncontrada === null){
                return "No se encuentra ese auto"
        } return (patenteEncontrada.vendido = true);
   },
   autosParaLaVenta: function(){
        let autosALaVenta = autos.filter(aLaVenta => aLaVenta.vendido == false)
        return autosALaVenta;
   },
   autosNuevos: function(){
        let autosALaVenta = this.autosParaLaVenta();
        let autosNuevos = autosALaVenta.filter(ceroKM => ceroKM.km < 100)
        return autosNuevos;
   },
   listaDeVentas: function(){
        
        let autosVendidos = autos.filter(seVendio => seVendio.vendido == true)
        let listaVentas = autosVendidos.map((lista) => lista.precio);
        return listaVentas

   },
   totalDeVentas: function(){
        let listaVentas = this.listaDeVentas();
        if(listaVentas.length === 0){
                return 0
        } 
        let totalVentas = listaVentas.reduce((acumulador, ventas) => acumulador + ventas);
        return totalVentas
   },
   puedeComprar (auto, persona) {
        let costoTotal = auto.precio;
        let costoCuotas = costoTotal / auto.cuotas;
        return  (costoTotal <= persona.capacidadDePagoTotal) && (costoCuotas <= persona.capacidadDePagoEnCuotas);

    },
    
   autosQuePuedeComprar(persona){
        let aLaVenta = this.autosParaLaVenta();
        let puedeCompar = aLaVenta.filter((auto)=> this.puedeComprar(auto,persona) == true);
        return puedeCompar
   

}
};

//console.log(concesionaria.buscarAuto("Toyota"))
//console.log(concesionaria.venderAuto("APL123"))
//console.log(concesionaria.venderAuto("JJK116"))
//console.log(concesionaria.autosParaLaVenta())
//console.log(concesionaria.autosNuevos())
//console.log(concesionaria.listaDeVentas())
//console.log(concesionaria.puedeComprar("Corolla", "juan"))

//console.log(concesionaria.autos)
console.log(concesionaria.puedeComprar(autos[0], {
                                                nombre: "Juan", 
                                                capacidadDePagoEnCuotas: 20000, 
                                                capacidadDePagoTotal: 100000}
                                                )) 
console.log(concesionaria.autosQuePuedeComprar({
        nombre: "Juan", 
        capacidadDePagoEnCuotas: 20000, 
        capacidadDePagoTotal: 100000}))



