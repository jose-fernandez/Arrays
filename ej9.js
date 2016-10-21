/*
Mejora el ejercicio anterior para además mostrar una 
tabla bidimensional que muestre las combinaciones 
(no sólo la suma) que se han ido dando (ahora sí 
podemos usar arrays bidimensionales).
*/
function init(){
	var dado1 = [1,2,3,4,5,6];
	var dado2 = [1,2,3,4,5,6];
	var matriz = [[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0],
				[0,0,0,0,0,0]];
	lanzamiento(dado1,dado2,matriz);
}

function lanzamiento(d1,d2,m){
	for (i=0;i<10000;i++){
		var x = random(d1);
		var y = random(d2);
		var dim1=m[x-1];
		++dim1[y-1];
	}
	print(m)
}

function random(d){
	return Math.floor(Math.random() * (7 - 1)) + 1;
}

function print(m){
	for (i=0;i<6;i++){
		for (j=0;j<6;j++){
			document.write(`${i+1} y ${j+1} => ${m[i][j]} veces.<br>`);
		}
	}

}

window.onload=function(){
	init();
}