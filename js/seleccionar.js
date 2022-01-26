function seleccionar(){      

    
    let consulta= $("#consulta").val();
    let documento= $("#doc").val(); 
    $("#BtnRegistrar").hide();
    $("#BtnVerificar").fadeIn();
    $("#turnoNoDisponible").hide();
    $("#turnoDisponible").hide();
    $("#VerificarTurno").fadeIn(); 

    
    $("#inputs1").submit(function(e){
        e.preventDefault();

        console.log(e.target);
    });

    console.log(documento);
    

    if(consulta>"0"){

        for (let search of listaRegistro)
        {    
            if(search.doc===(documento))
            {   
            document.getElementById("anuncio").innerHTML="¡ESTE DOCUMENTO YA TIENE UN TURNO RESERVADO!";
            
            document.getElementById("datos").innerHTML="<p> <br>  Recuerda que solo puedes registrar un turno por documento <br> <br> </p>";
            $(".modal").fadeIn(1000); 

            break;         
            }       
        }           
            console.log("Documento: " + documento + " Consulta: " + consulta);                    
            $("#contenedor").hide(1000);
            $("#contenedor2").fadeIn(1000); 
    }
            
    
    
}
  
   
    
/*
    for (let busqueda of listaRegistro)
    { 
        if(busqueda.doc==documento)
        {                
        alert("Este documento ya tiene un turno asignado"); 
        }
        else
        {
         console.log("Documento Nuevo");
        }
    } 
   
    

  */  

    
  



                    
  