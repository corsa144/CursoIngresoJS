function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var nota;
	var acumuladorDeNotas=0;
	var contador=0;
	var notaMinima=10;
	var notaMaxima=0;
	var sexoDeLaNotaMasBaja;
	var cantidadDeVaronesMayoresAprobados=0;
	var varones=0;
	var sexoDelMasJoven;
	var notaDelMasJoven;
	var primerMujerIngresada;
	var edadMinima=100;
	var elNombreDeLaPrimerMujer=0;
	var contadorDeMujeres=0;
	var mensaje;

	while (contador<5){

	nombre=prompt("ingrese nombre");
	sexo=prompt("ingrese sexo");

	
	while (sexo!="f"&&sexo!="m")
	{
		sexo=prompt("ingrese sexo");
	
	}
	edad=prompt("ingrese edad");
	edad=parseInt(edad);
	


	while (isNaN(edad)||edad<0||edad>100)
	{
		edad=prompt("ingrese edad");
		edad=parseInt(edad);
	}

	nota=prompt("ingrese nota");
	nota=parseInt(nota);

	while (isNaN(nota)||nota<0||nota>10)
	{
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
	}
	if (nota<notaMinima)
	{
		notaMinima=nota;
		sexoDeLaNotaMasBaja=sexo;
	}
	if (edad>=18&&sexo=="m"&&nota>5)
	{
		cantidadDeVaronesMayoresAprobados++;
	}
	if (edad<edadMinima)
	{
		edadMinima=edad;
		sexoDelMasJoven=sexo;
		notaDelMasJoven=nota;

		
	}
	if (sexo=="f"&&contadorDeMujeres==0)
	{
		contadorDeMujeres++;
		elNombreDeLaPrimerMujer=nombre;
	}
	else if (contadorDeMujeres==0)
	{
		mensaje="no hubo mujeres";
	}
	

	
	contador++;
	acumuladorDeNotas=nota+acumuladorDeNotas;

	}

	alert("el promedio es "+acumuladorDeNotas/5);
	alert("la nota mas baja es "+notaMinima+" y su sexo es "+sexoDeLaNotaMasBaja);
	alert("los varones mayores aprobados fueron "+cantidadDeVaronesMayoresAprobados);
	alert("el sexo  del mas joven es "+sexoDelMasJoven+" y la nota "+notaDelMasJoven);
	alert("el nombre de la primer mujer ingresada es "+elNombreDeLaPrimerMujer);
	alert(mensaje);

	



}
