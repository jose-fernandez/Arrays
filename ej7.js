/*
Escribe las funciones para llevar a cabo las siguientes 
operaciones para un array de una dimensión:
a) Establecer los 10 elementos del array a cero.
b) Añadir 1 a cada uno de los elementos del array.
c) Muestra los valores del array separados por espacios.toString()
*/

function init(){
	var list= new Array();
	document.write("<h2>Lista de 10 números</h2>");
	for (i=1;i<=10;i++){
		list.push(i);
	}
	document.write(list);
	toO(list);
	to1(list);
	splitSpace(list);
	
}

function toO(x){
	document.write("<h2>Lista de 0's números</h2>");
	for (i=0;i<10;i++){
		x[i]=0;
	}
	document.write(x);
}

function to1(x){
	document.write("<h2>Lista de 1's números</h2>");
	for (i=0;i<10;i++){
		x[i]=1;
	}
	document.write(x);
}

function splitSpace(x){
	document.write("<h2>números separados por espacios</h2>");
	var string = x.toString();
	var newString="";
	for (i=0;i<string.length;i++){
		if (string[i]==","){
			newString+= " ";
		}else{
			newString+=string[i];
		}
	}
	document.write(newString);
}

window.onload = function(){
	init();
}