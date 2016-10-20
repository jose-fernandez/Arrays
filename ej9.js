/*
Mejora el ejercicio anterior para además mostrar una 
tabla bidimensional que muestre las combinaciones 
(no sólo la suma) que se han ido dando (ahora sí 
podemos usar arrays bidimensionales).
*/
function init(){
	var dado1 = [1,2,3,4,5,6];
	var dado2 = [1,2,3,4,5,6];
	lanzamiento(dado1,dado2);
	simulacion(dado1,dado2);
}

function lanzamiento(d1,d2){
	document.write(`${random(d1)}, ${random(d2)}`);
}

function random(d){
	x= Math.floor(Math.random() * 7);
	return d[x];
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