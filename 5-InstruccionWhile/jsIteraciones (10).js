function mostrar()
{
	var cantidadDePositivos=0;
	var cantidadDeNegativos=0;
	var sumaPositivos=0;
	var sumaNegativos=0;
	var cantidadDeCeros=0;
	var cantidadDePares=0;
	var respuesta="si";
	var numero;

	while(respuesta!="no")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if (numero>0)
		{
			cantidadDePositivos++;
			sumaPositivos=numero+sumaPositivos;

		}else if (numero<0){

			cantidadDeNegativos++;
			sumaNegativos=numero+sumaNegativos;
		}else{

			cantidadDeCeros++;
		}
		if (numero%2==0)
		{
			cantidadDePares++;
		}

		respuesta=prompt("¿desea continuar?");

	}
		document.write("cantidad de positivos: "+cantidadDePositivos);
		document.write("\ncantidad de negativos: "+cantidadDeNegativos);
		document.write("\ncantidad de ceros: "+cantidadDeCeros);
		document.write("\ncantidad de pares: "+cantidadDePares);
		document.write("\nsuma positivos: "+sumaPositivos);
		document.write("\nsuma negativos: "+sumaNegativos);
		document.write("\npromedio de positivos: "+sumaPositivos/cantidadDePositivos);
		document.write("\npromedio de negativos: "+sumaNegativos/cantidadDeNegativos);
		document.write("\nresta(positivos-negativos): "+(sumaPositivos-sumaNegativos));






}//FIN DE LA FUNCIÓN