function mostrar()
{
 	var planeta;
 	var mensaje;

 	planeta = prompt("Ingrese un planeta del sistema solar");

 	switch (planeta)
 	{
 		case "tierra":
 			mensaje = "aca vivimos";
 			break;
 		
 		case "mercurio":
 		case "venus":
 			mensaje = "aca hace mas calor";
 			break;
 		
 		case "marte":
 		case "jupiter":
 		case "saturno":
 		case "urano":
 		case "neptuno":
 			mensaje = "aca hace mas frio";
 			break;
 		
 		default:
 			mensaje = "no es un planeta valido";
 			break;
 	}

 	alert(mensaje);


 	/*if (planeta == "tierra")
 	{
 		mensaje = "aca vivimos";
 	}
 	else
 	{
 		if(planeta = "mercurio")
 		{
 			mensaje = "aca hace mas calor";
 		}
 		else
 		{
 			if(planeta = "venus")
 			{
 				mensaje = "aca hace mas calor";
 			}
 			else
 			{
 				mensaje = "aca hace mas frio";
 			}//error
 		}
 	}//falta ver que pasa si no es un planeta

 	alert(mensaje);*/
}
