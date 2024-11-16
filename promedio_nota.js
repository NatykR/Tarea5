const notas=[6,8,9,2,5,10]

// Función para calcular la suma

function suma (notas){
    return notas[0] + notas[1] + notas[2] + notas[3] + notas[4] + notas[5];
} 


// Función para calcular el promedio INCOMPLETO :(

function promedio (notas){

    return suma(notas) / notas.length; 
}


// Console,log para cada operación solicitada 
 console.log("La suma es= " + suma(notas));
 console.log("El promedio es= " + promedio(notas));
