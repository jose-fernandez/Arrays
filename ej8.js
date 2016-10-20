/*
Haciendo uso de un array unidimensional, escribir un script 
para simular el lanzamiento de dos dados. El script debe 
simular el lanzamiento (aleatorio) de ambos dados. La suma 
de los dos valores debe calcularse a continuación (la suma 
variará pues de 2 a 12, siendo éstos los valores menos 
frecuentes así como 7 el más frecuente). Haz una simulación 
con 36.000 lanzamientos y muestra el número de veces que 
aparece cada una de las combinaciones.
*/
function init(){
	var dado1 = [1,2,3,4,5,6];
	var dado2 = [1,2,3,4,5,6];
	lanzamiento(dado1,dado2);
	simulacion(dado1,dado2);
}

function lanzamiento(d1,d2){
	console.log (`La suma de dados es: ${random(d1,d2)}`)
}

function random(d1,d2){
	x= Math.floor(Math.random() * 7);
	y= Math.floor(Math.random() * 7);
	return d1[x]+d2[y];
}

function simulacion(d1,d2){
	var lista=[0,0,0,0,0,0,0,0,0,0,0]
	for (i=0;i<36000;i++){
		var x = random(d1,d2);
		++lista[x-2];
	}
	console.log(lista)
}

window.onload=function(){
	init();
}