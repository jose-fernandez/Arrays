/*
Crear una función llamado paresImpares que cree un array 
de 100 números aleatorios del 1 al 1000. Una vez creado, 
mostrar el contenido y después organizarlo de forma que estén
juntos los elementos pares y los impares. Después, volver a 
mostrar el array.
*/

function paresImpares(){
	var list = new Array();
	for (i=0;i<100;i++){
		list.push(random())
	}
	console.log(list);
	list.forEach(joinOddEven);

}

function random() {
  return Math.floor(Math.random() * (1000 - 1) + 1);
}

function joinOddEven(value, index){
		console.log(value);
}

window.onload = function(){
	paresImpares();
}