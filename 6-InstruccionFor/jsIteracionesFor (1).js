function mostrar()
{
	var contador;//1
	contador=0;//2

	/*instruccion, condicion e instruccion*/for(;;)//primero el 1 despues el 2 luego el 3 despues el 2 luego el 3 y asi hasta que se termina
	{
		console.log(contador);
		contador++;//4
		if(contador==5)//3(contador<5)
		break;
	}
		console.log(contador);
}