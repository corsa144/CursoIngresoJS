
function mostrar()
{
	var base;
	var altura;
	var resultadoSuperficie;
	var resultadoPerimetro;

	base=document.getElementById('base').value;
	base=parseInt(base);
	altura=document.getElementById('altura').value;
	altura=parseInt(altura);

	resultadoSuperficie=base*altura/2;
	resultadoPerimetro=base*3;

	alert('El area es '+resultadoSuperficie+'\nEl perimetro es '+resultadoPerimetro);


}
