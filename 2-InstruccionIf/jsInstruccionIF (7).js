function mostrar()
{
//tomo la edad  
	var edad;
	var estadoCivil;

	edad=document.getElementById('edad').value;
	edad=parseInt(edad);
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad<18&&estadoCivil!="Soltero")//"Soltero empieza en mayusculas porque asi esta en el html"
	{
		alert("es muy pequeño para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN