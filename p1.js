// const suma = function(a,b){
//     return a+b
// }
// console.log("5 + 4 = "+ suma(5,4))

//----------------------------------------------------------------------------------
//SÍNCRONA

//ESTILO DE PROGRAMACIÓN: DIRECT-STYLE

const suma2 = function(a2,b2,callback2){
    callback2(a2+b2)
}


const miCallback2 = function(resultado2){
    console.log("El resultado desde la función callback es: " + resultado2)
}

console.log("ANTES DE FUNCIÓN CALLBACK")
suma2(5,4,miCallback2)
console.log("DESPUÉS DE LA FUNCIÓN CALLBACK")


//----------------------------------------------------------------------------------
//ASÍNCRONA

//ESTILO DE PROGRAMACIÓN: CONTINUATION-PASSIN STYLE
console.log("---------------------------------------------------")
const suma = function(a,b,callback){
    var resultado;
    setTimeout(function(){
        resultado = a + b
        callback(resultado)
    }, 3000)
}


const miCallback = function(resultado){
    console.log("El resultado desde la función callback es: " + resultado)
}

console.log("ANTES DE FUNCIÓN CALLBACK")
suma(5,4,miCallback)
console.log("DESPUÉS DE LA FUNCIÓN CALLBACK")