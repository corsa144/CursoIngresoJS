function mostrar()
{

	
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta=="si")
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);

		if (isNaN(numero))
		{
			continue;
		}

		if (numero>=0)
		{
			positivo=numero+positivo
		} else {
			negativo=numero*negativo
		}
		respuesta=prompt("¿quiere ingresar otro numero?")
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN