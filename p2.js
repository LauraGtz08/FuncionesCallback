//----------------------------------------------------------------------------------
fs = require("fs")
console.log("ANTES DE LA LECTURA DEL ARCHIVO TXT")
fs.readFile("input2.txt", "utf-8", function(err,data){ //FUNCIÓN ANÓNIMA
    if(err){
        return console.log("ERROR" + err)
    }else{
        console.log(data)
    }
})
console.log("DESPUES DE LA LECTURA DEL ARCHIVO TXT")
//----------------------------------------------------------------------------------
//ASÍNCRONA
console.log("-----------------------------------------")
fs2 = require("fs")
console.log("ANTES DE LA LECTURA DEL ARCHIVO TXT")
const miCallback3 = function(err2,data2){
    if(err2){
        return console.log("ERROR" + err2)
    }else{
        console.log(data2)
    }
}
fs2.readFile("input2.txt", "utf-8", miCallback3);
//readFile: DE MANERA INTERNA MANDA A LLAMAR LA FUNCIÓN CALLBACK
console.log("DESPUES DE LA LECTURA DEL ARCHIVO TXT")