//variables para traer el valor de los campos del formulario
var usuario=document.getElementById("usuario");
var nombre=document.getElementById("nombre");
var pApellido=document.getElementById("pApellido");
var sApellido=document.getElementById("sApellido");
var fecha=document.getElementById("fecha");
var correo=document.getElementById("correo");
var tlf=document.getElementById("tlf");
var dni=document.getElementById("dni");
var iban=document.getElementById("iban");
var swift=document.getElementById("swift");
//funcion validar nombre
function esNombreValido(nombre) { 
    var nombrePattern =/^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9])([0-9]{4}){1}/ 
    return nombre.match(nombrePattern) 
}
//funcion validar usuario
function esUsuarioValido(usuario) { 
    var nombrePattern =/^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9])([0-9]{4}){1}/
    return usuario.match(nombrePattern) 
}
//funcion validar papellido
function espApellidoValido(pApellido) { 
    var nombrePattern =/^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9])([0-9]{4}){1}/
    return pApellido.match(nombrePattern)  
}
//funcion validar sapellido
function essApellidoValido(sApellido) { 
    var nombrePattern =/^[A-Za-z]{1}([A-Za-z]{2}|[0-9]{2}|[A-Za-z][0-9])([0-9]{4}){1}/
    return sApellido.match(nombrePattern) 
}
//funcion validar correo
function esCorreoValido(correo) { 
    var correoPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    return correoPattern.match(nombrePattern) 
}
function esTlfValido(tlf){
    let phonePattern = /#"^\(?\d{3}\)?[ -]?\d{3}[ -]?\d{4}$"#/
    return tlf.match(phonePattern)
}
//funcion valar fecha
function esfechaValido(fecha) { 
    let today=new Date();
    return today-14>fecha.test(fecha); 
}

function esDniValido(dni) { 
    var DNI_REGEX=/^(\d{8})([A-Z])$/;
    return dni.match(DNI_REGEX); 
}
//funciones validar iban
function validarIban(iban) {
    //Se pasa a Mayusculas
    iban = iban.toUpperCase();
    //Se quita los blancos de principio y final.
    iban = iban.trim();
    iban = iban.replace(/\s/g, ""); //Y se quita los espacios en blanco dentro de la cadena

    var letra1,letra2,num1,num2;
    var isbanaux;
    var numeroSustitucion;
    //La longitud debe ser siempre de 24 caracteres
    if (IBAN.length != 24) {
        return false;
    }

    // Se coge las primeras dos letras y se pasan a números
    letra1 = iban.substring(0, 1);
    letra2 = iban.substring(1, 2);
    num1 = getnumIBAN(letra1);
    num2 = getnumIBAN(letra2);
    //Se sustituye las letras por números.
    isbanaux = String(num1) + String(num2) + iban.substring(2);
    // Se mueve los 6 primeros caracteres al final de la cadena.
    isbanaux = isbanaux.substring(6) + isbanaux.substring(0,6);

    //Se calcula el resto, llamando a la Funcionresto, definida más abajo
    resto = Funcionresto(isbanaux);
    if (resto == 1){
        return true;
    }else{
        return false;
    }
}
function Funcionresto(iban) {
    var parts = Math.ceil(iban.length/7);
    var remainer = "";

    for (var i = 1; i <= parts; i++) {
        remainer = String(parseFloat(remainer+iban.substr((i-1)*7, 7))%97);
    }

    return remainer;
}

function getnumIBAN(letra) {
    ls_letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return ls_letras.search(letra) + 10;
}

