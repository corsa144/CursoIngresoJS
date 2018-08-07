function mostrar()
{
	var dia;
	var mensaje;
	dia=prompt("ingrese dia");
	

	switch(dia)
	{
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
			mensaje="a trabajar";
			break;
		case "sabado":
		case "domingo":
			mensaje="buen finde";
			break;
		default :
			mensaje="no es un dia valido";
	}

	alert(mensaje);
}
