//------------------------------------------------------------------------------------------
//EJEMPLO BÁSICO DE PROGRAMACIÓN ASÍNCRONA
console.log("-------------------------------------------")
console.log("EJEMPLO BÁSICO DE PROGRAMACIÓN ASÍNCRONA")
console.log("-------------------------------------------")
console.log()
console.log("Starting up")

setTimeout(()=>{
console.log("Two Seconds")
},2000)

setTimeout(()=>{
console.log("Zero seconds")
},0)

console.log("Finishing Up")

//------------------------------------------------------------------------------------------
console.log()
console.log()
console.log("-------------------------------------------")
console.log("LEER UN ARCHIVO TXT Y MOSTRAR CONTENIDO    ")
console.log("-------------------------------------------")
console.log()


var fs = require("fs");
fs.readFile('input.txt', function(err, data){
    if(err){
        return console.log(err);
    }else{
        console.log(data.toString());
    }
});
console.log("FIN :)");

//------------------------------------------------------------------------------------------
console.log()
console.log()
console.log("-------------------------------------------")
console.log("EJEMPLO EN CLASE DE CALLBACK: NÚMEROS IMPARES")
console.log("-------------------------------------------")
console.log()

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const nuemros = function(num){
    if (num % 2 === 1){
        if (num < 10){
            return num 
        }
    }
}

const numeros_imp = array.filter(nuemros)
console.log("Números impares < 10: " + numeros_imp)
console.log("")

//------------------------------------------------------------------------------------------
console.log()
console.log()
console.log("-------------------------------------------")
console.log("EJEMPLO EN CLASE DE CALLBACK: CALCULADORA (QUE EN REALIDAD NO ES UN CALLBACK)")
console.log("-------------------------------------------")
console.log()
const num1 = 5
const num2 = 5

const suma = (num1,num2) => {
    return num1+num2
}

const resta = (num1, num2) => {
    return num1-num2
}

const multiplicacion = (num1, num2) => {
    return num1*num2
}

const divicion = (num1, num2) => {
    return num1/num2
}

const sumar = suma(num1,num2)
const restar = resta(num1,num2)
const multiplicar = multiplicacion(num1,num2)
const dividir = divicion(num1,num2)
console.log("----------------------")
console.log("     CALCULADORA      ")
console.log("----------------------")
console.log("Suma: " + sumar)
console.log("Resta: " + restar)
console.log("Multiplicación: " + multiplicar)
console.log("Dividir: " + dividir)
console.log("----------------------")


//------------------------------------------------------------------------------------------
console.log()
console.log()
console.log("-------------------------------------------")
console.log("EJEMPLO EN CLASE DE CALLBACK: OTRO EJEMPLO")
console.log("-------------------------------------------")
console.log()

const callback = function(r){
    console.log("La suma es: "+r)

}
const suma1 = function(a,b,mycallback){
    var r = a + b
    mycallback(r)
}

suma1(5,10,callback)

//------------------------------------------------------------------------------------------
//CALLBACK: PASA COMO ARGUMENTO OTRA FUNCIÓN DEL CALLBACK
console.log()
console.log()
console.log("-------------------------------------------")
console.log("EJEMPLO EN CLASE DE CALLBACK: OTRO EJEMPLO X2")
console.log("-------------------------------------------")
console.log()

function sum(n1,n2){//NO.1
    return n1+n2
}

function calculate(a,b,callback){//(LOCAL): FUNCION CON CALLBACK
    return callback(a,b);
}

var result = calculate(5,6,sum) //FUNCIÓN QUE RECIBE LA NO.1
console.log(result)