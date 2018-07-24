var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;
var piedra=1;
var papel=2;
var tijera=3;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	eleccionMaquina=Math.floor(Math.random(4-1)*3)+1;



}//FIN DE LA FUNCIÓN
function piedra()
{

	if(eleccionMaquina==piedra)
	{
		ContadorDeEmpates+=1;//cont++ o ++cont tambien hay acum(acumulador)=acum+var2 tambien esta bandera bandera=true if(bandera){bandera=false}
		alert("empato");
	}else if(eleccionMaquina==3)
	{
		ContadorDeGanadas++;
		alert("ganada");
	}else
	{
		ContadorDePerdidas++;
		alert("perdida");
	}
}//FIN DE LA FUNCIÓN
function papel()
{

	if(eleccionMaquina==papel)
	{
		ContadorDeEmpates+=1;//cont++ o ++cont tambien hay acum(acumulador)=acum+var2 tambien esta bandera bandera=true if(bandera){bandera=false}
		alert("empato");
	}else if(eleccionMaquina==3)
	{
		ContadorDeGanadas++;
		alert("perdida");
	}else
	{
		ContadorDePerdidas++;
		alert("ganada");
	}
}//FIN DE LA FUNCIÓN
function tijera()
{

	if(eleccionMaquina==tijera)
	{
		ContadorDeEmpates+=1;//cont++ o ++cont tambien hay acum(acumulador)=acum+var2 tambien esta bandera bandera=true if(bandera){bandera=false}
		alert("empato");
	}else if(eleccionMaquina==2)
	{
		ContadorDeGanadas++;
		alert("ganada");
	}else
	{
		ContadorDePerdidas++;
		alert("perdida")
	}
}//FIN DE LA FUNCIÓN

function mostrarResultado()
{
	document.getElementById('gandas').value=ContadorDeGanadas;
	document.getElementById('empatadas').value=ContadorDeEmpates;
	document.getElementById('perdidas').value=ContadorDePerdidas;
	function comenzar(
		)
}