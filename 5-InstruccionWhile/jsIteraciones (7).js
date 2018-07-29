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
		
		if(isNaN(numero))//if(isNAN(numero))
		{
			continue;
			//continue;(salta todo el codigo y vulve a la condicion del while)
		}
		contador++;
		acumulador=numero+acumulador;
		respuesta=prompt("¿quiere ingresar otro numero?")
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN