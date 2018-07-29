function mostrar()
{

	
	// declarar variables
	
	var respuesta='si';
	var maximo=-9999;
	var minimo=+9999;
	var numero;
	while(respuesta!='no')
	{	
		
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero>maximo)
		{
			maximo=numero;
		}
			if(numero<minimo)
		{
			minimo=numero;
		}


		respuesta=prompt("¿desea continuar?");
		
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN