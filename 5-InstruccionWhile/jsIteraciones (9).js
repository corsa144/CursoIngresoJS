function mostrar()
{

	// var bandera=0
	// declarar variables
	//var contador=0
	var respuesta='si';
	var maximo=-9999;
	var minimo=+9999;
	var numero;
	while(respuesta!='no')
	{	
		
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);
		if(numero>maximo)//while(isNaN(numero))//if(contador==0){contador++}else{}
		{
			maximo=numero;
		}
			if(numero<minimo)
		{
			minimo=numero;
		}


		respuesta=prompt("¿desea continuar?");//if(numero>maximo){maximo=numero;}if(numero<minimo){minimo=numero;}
		
	}

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;


}//FIN DE LA FUNCIÓN