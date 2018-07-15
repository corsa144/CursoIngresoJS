function mostrar()
{
//tomo la edad  

	var edad;
	edad=document.getElementById('edad').value;
	edad=parseInt(edad);

	if(edad>17)
	{
		alert("adulto");
	}
	else if(edad>12)
	{
		alert("adolescente");
	}
	else
	{
		alert("niño");
	}
}//FIN DE LA FUNCIÓN