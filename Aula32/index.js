const frutas = ['Lichia', 'Uva', 'Morango'];

/*for (let i = 0; i <  frutas.length; i++){
    console.log(frutas[i]);
}*/

for( let valor of frutas){
    console.log(valor);
}

frutas.forEach(function(valor, indice, array){
     console.log(valor, indice, array);  
})
