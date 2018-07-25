function mostrar()
{
	var numeroUno,numeroDos;

	numeroUno=prompt("ingrese numero 1");
	numeroUno=parseInt(numeroUno);

	numeroDos=prompt("ingrese numero 2");
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		alert(numeroUno+""+numeroDos);
	}
	else if(numeroUno>numeroDos)
	{
		alert(numeroUno-numeroDos);
	}
	else 
	{
		alert(numeroUno+numeroDos);
		if(numeroUno+numeroDos>10)
		{
			alert("la suma es "+(numeroUno+numeroDos)+" y supero el 10");
		}
	}

}
