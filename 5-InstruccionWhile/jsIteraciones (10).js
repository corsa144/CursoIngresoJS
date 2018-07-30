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
		document.write("<br />cantidad de negativos: "+cantidadDeNegativos);
		document.write("<br />cantidad de ceros: "+cantidadDeCeros);
		document.write("<br />cantidad de pares: "+cantidadDePares);
		document.write("<br />suma positivos: "+sumaPositivos);
		document.write("<br />suma negativos: "+sumaNegativos);
		document.write("<br />promedio de positivos: "+sumaPositivos/cantidadDePositivos);
		document.write("<br />promedio de negativos: "+sumaNegativos/cantidadDeNegativos);
		document.write("<br />resta(positivos-negativos): "+(sumaPositivos-sumaNegativos));






}//FIN DE LA FUNCIÓN