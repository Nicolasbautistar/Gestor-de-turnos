var today = new Date();

var dia = today.getDate();
var mes = today.getMonth()+1;
var yyyy = today.getFullYear();


			console.log("Día " + dia);
			console.log("Mes " + mes);
			console.log("Año " + yyyy);

 				if(dia<10){
     				dia='0'+dia;
    			} 
    			if(mes<10){
       				mes='0'+mes;
    			}

		today = yyyy+'-'+mes+'-'+dia;
        document.getElementById("fecha").setAttribute("min", today);


        
        //Hora -  Caja - Numero de Turno