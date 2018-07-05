/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*///var= variable//
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=Document.getElementById('numeroUno').value;
	numeroUno=parceIn(numeroUno);
	numeroDos=Document.getElementById('numeroDos').value;
	resultado=(numeroUno+numeroDos)//+ sirve para sumar y para concatenar//
	alert(resultado);
	//numeroUno+numeroDos fue reemplazado por resultado//

}

