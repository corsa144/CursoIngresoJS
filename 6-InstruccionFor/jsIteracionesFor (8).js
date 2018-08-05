function mostrar()
{
	var numero;
	var contador;
	var bandera=true;

	numero=prompt("ingrese numero");
	numero=parseInt(numero);

	for (contador=numero-1;contador>1;contador--)
	{
		if (numero%contador==0)
		{
			console.log(numero+" no es primo");
			bandera=false;
			break;
		}


	}

	if (bandera==true)
		{
			console.log(numero+" es primo");

		}































	/*var divisores;
	var numeroIngresado;
	var numeroAnterior;
	var numerosRecorridos;

	divisores=0;
	numeroIngresado=prompt(numeroIngresado);
	numeroIngresado=parseInt(numeroIngresado);

	for(numerosRecorridos=numeroIngresado;numerosRecorridos>1;numerosRecorridos--)
	{	
		divisores=0;
		for(numeroAnterior= numerosRecorridos-1;numeroAnterior>1;numeroAnterior--)
			{
		if(numerosRecorridos%numeroAnterior==0)
		{
			divisores++;
			break;
		}
	}
		if(divisores==0)
	{
		console.log("es primo el "+ numerosRecorridos);
	}

	}
	*/
	/*for(numeroAnterior=numeroIngresado-1;numeroAnterior>1;numeroAnterior--)
	{
		if(numeroIngresado%numeroAnterior==0)
		{
			divisores++;
			break;
		}
	}
	if(divisores==0)
	{
		console.log("es primo");
	}else{
		console.log("NO es de los numeros primo");
	}*/


}//FIN DE LA FUNCIÓN