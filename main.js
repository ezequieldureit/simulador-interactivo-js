// SIMULACRO APP WEB DE PLANES ALIMENTICIOS.



function saludar() {
    alert("Bienvenido a 4 Your Health. A continuación ingresa tus datos para que armemos tu plan alimenticio.")
}

function despedir(){
    alert("Gracias por confiar en la asesoria de 4 Your Health")
}

saludar();


let nombre = prompt("Ingresa tu nombre");
let edad = prompt("Hola " + nombre + " " + "ingresa tu edad");
let peso = Number(prompt("Ingresa tu peso en KG"));
let fase1 = "\nComas alimentos naturales ricos en vitamina A y C";
let fase2 = "\nComas con frecuencia vegetales de color verde, amarillo y anaranjado intenso.";
let fase3 = "\nDisminuyas el consumo de embutidos y carnes ahumadas.";

if ((edad <= 20) && (peso <= 55)) {

    alert("Nuestros asesores te recomiendan que:" + " " + fase1);
}

else if ((edad <= 40) && (peso <= 65)) {

    alert("Nuestros asesores te recomiendan que:" + " " + fase2);
}

else {

    alert("Nuestros asesores te recomiendan que:" + " " + fase3);
}

despedir();