function mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';
	var maximo=-9999;
	var minimo=+9999;
	var numero;
	while(respuesta!='no')
	{	
		if()
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


		respuesta=prompt("ingrese dato");
		
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN