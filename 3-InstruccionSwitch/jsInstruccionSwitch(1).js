function mostrar()
{
//tomo la edad  
	var mesDelAno;
	mesDelAno=document.getElementById('mes').value;

	switch(mesDelAno)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":
			alert("a clases!!!.");
			break;
		case "Julio":
			alert("se vienen las vacaciones!!!");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
		default:
	}



}//FIN DE LA FUNCIÓN