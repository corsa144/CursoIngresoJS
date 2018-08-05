function mostrar()
{
	var numero;

	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for(;;)
	{

		console.log("no es el numero");
		
		if (numero==9)
		{
			break;
		}
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
	}



}//FIN DE LA FUNCIÓN