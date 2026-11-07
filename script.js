const guardardatos=()=>{
    const nombre = document.getElementById("Nombre").value;
    const edad = document.getElementById("edad").value;
    const genero = document.getElementById("Genero").value;
    const cliente = document.getElementById("Cliente").value;

    // 1. Primero validamos que no estén vacíos
     if(nombre === "" || edad ==="" || genero ==="" || cliente ===""){
        document.getElementById("saludo").textContent = "Por favor, complete todos los campos.";
        return;
     }
    // 2. Llamamos a tu función VerificarEdad (convertimos edad a número con Number())
    const estadoEdad = VerificarEdad(Number(edad));

    // 3. Guardamos en localStorage ahora que estamos seguros de que los datos existen
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("edad", edad);
    localStorage.setItem("genero", genero);
    localStorage.setItem("cliente", cliente);

    // 4. Mostramos el saludo y el estado de edad
    document.getElementById("saludo").textContent = `${saludar(nombre)} ${cliente} ${estadoEdad} ${genero}`;

    //5. limpia los campos automaticamente 
    document.getElementById("Nombre").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("Genero").value = "";
    document.getElementById("Cliente").value = "";
}
const saludar =(nombre) =>{
    return `Hola, ${nombre}!`;
}
const VerificarEdad =(edad) =>{
    if(edad >= 18){
        return "Es mayor de Edad";
    }else {
        return "No es mayor de Edad";
    }
    
}