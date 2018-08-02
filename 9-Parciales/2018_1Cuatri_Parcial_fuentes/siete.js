

	/* jose     m       25
 maria      f       16
 jesus      m       33
 fer        f        82
 1-cantidad de mujeres=2
 2-cantidad de hombres=2
 3-cantidad de menores de edad=1
 4-cantidad de mayores de edad=3
 5-la edad mas baja=16
 6-la edad mas alta=81
 7-promedio de edad de mujeres=48
 8-promedio de edad de hombres=29
 9-promedio de edad total=38
 10-nombre del mas viejo=fer
 11-nombre dek mnas joven
 12-sexo dek mnas viejo
 13-nombre de kla mujer mas vieja*/
function mostrar()
{
	var nombre;
	var sexo;
	var edad;
	var contador=0;
	var cantidadDeMujeres=0;
	var cantidadDeHombres=0;
	var cantidadDeMenores=0;
	var cantidadDeMayores=0;
	var edadMaxima=0;
	var edadMinima=100;
	var nombreMayor;
	var nombreMenor;
	var contadorDeMujeres=0;
	var edadMaximaFemenina;
	var nombreFemeninoMasViejo;



	while(contador<4)
		{
			contador++;
			nombre=prompt("ingrese nombre valido");
		
			sexo=prompt("ingrese sexo valido");
			while(sexo!="m"&&sexo!="f")
			{

				sexo=prompt("ingrese sexo valido");
				if(sexo=="m")
				{
					cantidadDeHombres++;
				}if(sexo=="f")
				{
					cantidadDeMujeres++;
				}
			}
		
			edad=prompt("ingrese edad");
			edad=parseInt(edad);
				if(edad<18)
				{
					cantidadDeMenores++;
				}else
				{
					cantidadDeMayores++;
				}
				
			while(isNaN(edad)||edad<0||edad>100)
			{
				edad=prompt("ingrese edad");
				edad=parseInt(edad);
				if(edad<18)
				{
					cantidadDeMenores++;
				}else
				{
					cantidadDeMayores++;
				}
			}

			if(contador==1){
				edadMaxima=edad;
				edadMinima=edad;
				nombreMayor=nombre;

			}else{
				if(edadMaxima<edad){
					edadMaxima=edad;
					nombreMayor=nombre;

					if(sexo=="f")
					{	
						contadorDeMujeres++;

						if(edad>edadMaximaFemenina){
							edadMaximaFemenina=edad;
							nombreFemeninoMasViejo=nombre;
						}
					}
					

					

				}if(edadMinima>edad){
					edadMinima=edad;
					nombreMenor=nombre;
				}
			}
		}
			
		document.write("cantidad de mujeres son "+ cantidadDeMujeres);
		document.write("<br />cantidad de hombres son "+ cantidadDeHombres);
		document.write("<br />cantidad de mayores de edad son "+ cantidadDeMayores);
		document.write("<br />cantidad de menores de edad son "+ cantidadDeMenores);	
		
}

