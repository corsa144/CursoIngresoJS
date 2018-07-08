/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*///var= variable//
function sumar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById("numeroUno").value;
	numeroUno=parseInt(numeroUno);//las comillas indican texto literal//
	numeroDos=document.getElementById('numeroDos').value;
	numeroDos=parseInt(numeroDos);//sin comillas es una variable//
	resultado=(numeroUno+numeroDos);//+ sirve para sumar y para concatenar//
	alert(resultado);
	//numeroUno+numeroDos fue reemplazado por resultado//

}

