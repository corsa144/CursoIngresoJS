function mostrar()
{

	var numero;
	var contador;
	var cantidadDePares=0;



	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for(contador=0;contador<numero;contador++)
	{
		if ((contador+1)%2==0)
		{
			cantidadDePares++;
			console.log((contador+1)+" es par");
		}
		
		
	}
	console.log("Los pares son "+cantidadDePares);
}//FIN DE LA FUNCIÓN