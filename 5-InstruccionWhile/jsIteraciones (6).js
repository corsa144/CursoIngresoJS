function mostrar()
{

	var contador=0;// contador=variable+constante
	var acumulador=0;// acumulador=variable+variable2
	var numero;
	
	
	
	
	while(contador<5)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador;
		contador++;//	while(isNaN){numero=prompt(); numero=parseInt();}acumulador=numero+acumulador;
		
		
		//aca hay un error;
	

			
			
	}
	

			document.getElementById('suma').value=acumulador;
			document.getElementById('promedio').value=acumulador/5;
	}


