/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	
	var importe;
	var resultado;
	importe=document.getElementById('importe').value;// a la izquierda es donde se guarda el dato
	importe=parseInt(importe);
	resultado=(importe*0.75);
	document.getElementById('resultado').value=resultado;//asigno valor al input

	
}