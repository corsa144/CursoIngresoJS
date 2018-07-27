function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var suma;
	var promedio;
	
	
	
	while(contador<5){
			numero=prompt("ingrese numero");
		numero=parseInt(numero);
		suma=numero+acumulador;
		contador++;
		promedio=suma/contador;
		
		acumulador+numero//aca hay un error;
	

			
			
	}
	

			document.getElementById('suma').value=acumulador;
			document.getElementById('promedio').value=acumulador/5;
	}


