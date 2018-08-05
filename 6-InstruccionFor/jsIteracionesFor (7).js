function mostrar()
{
	var numero;
	var contador;
	var cantidadDeDivisores=0;

	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for (contador=0;contador<numero;contador++)
	{
		if (numero%(contador+1)==0)
		{
			cantidadDeDivisores++;
			console.log("divisor "+(contador+1));
		}
		
	}

	console.log("la cantidad de divisores son "+cantidadDeDivisores);
}//FIN DE LA FUNCIÓN