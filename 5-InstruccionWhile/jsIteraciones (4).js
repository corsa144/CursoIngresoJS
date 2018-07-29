function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");
	numero=parseInt(numero);

	while(numero<0||numero>9)
	{
		numero=prompt("ingrese un numero entre 0 y 9");
		console.log(numero);
	}


}//FIN DE LA FUNCIÓN