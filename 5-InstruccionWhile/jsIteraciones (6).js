function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;
	
	
	
	while(contador<5)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador;
		contador++;
		
		
		//aca hay un error;
	

			
			
	}
	

			document.getElementById('suma').value=acumulador;
			document.getElementById('promedio').value=acumulador/5;
	}


