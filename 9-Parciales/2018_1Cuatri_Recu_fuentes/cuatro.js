function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultadoSuma;

	numeroUno=prompt("ingrese el primer numero");
	numeroUno=parseInt(numeroUno);
	numeroDos=prompt("ingrese el segundo numero");
	numeroDos=parseInt(numeroDos);

	if (numeroUno==numeroDos)
	{
		alert(numeroUno+""+numeroDos);
	}
	else if (numeroUno>numeroDos)
	{
		alert(numeroUno/numeroDos);

	}else 

		resultadoSuma=(numeroUno+numeroDos);
		alert(resultadoSuma);
		if (resultadoSuma<50)
		{
			alert(resultadoSuma+" y la suma es menor a 50");
		}
	
}
