function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta="si";
	var numero;
	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero=="si")//if(isNAN(numero))
		{
			break;
			//continue;(salta todo el codigo y vulve a la condicion del while)
		}
		//respuesta=prompt("mostrar respuesta")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN