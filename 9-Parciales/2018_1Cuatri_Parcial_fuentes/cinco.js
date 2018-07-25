function mostrar()
{
	var planeta;

	planeta=prompt("ingrese planeta");

	switch(planeta)
	{
		case "mercurio":
		case "venus":
			alert("acá hace más calor");
			break;
		case "tierra":
			alert("acá vivimos");
			break;
		case "marte":
		case "jupiter":
		case "saturno":
		case "neptuno":
		case "urano":
			alert("acá hace más frio");
			break;
		default:
			alert("no es un planeta valido");
	}

}
