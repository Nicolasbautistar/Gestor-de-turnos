function Verificar (){

    $("#inputs2").submit(function(e){
        e.preventDefault();
        
        console.log(e.target);
    });


    let fecha=  $("input#fecha").val(); 
    let hora= $("input#hora").val();
    let hour=hora.substr(0,2);
    let minutes=hora.substr(-2);
    
    hour=parseInt(hour);
    minutes=parseInt(minutes);
    console.log(hour);
    console.log(minutes);


    if((hora=="") || (hour<8) || (hour>16) || (fecha=="")){

        console.log("INPUTS VACIOS");
        console.log("hora: " + hora);
        console.log("fecha: " + fecha);

    }
    else{

        for (const search of listaRegistro) {

            if((search.hora==hora)&&(search.fecha==fecha))
            {
                console.log("FECHAS COINCIDEN");
                document.getElementById("fecha").value="";
                document.getElementById("hora").value=""; 
                $("#VerificarTurno").hide();                                         
                $("#turnoNoDisponible").fadeIn();
                $("#turnoDisponible").hide();
                $("#BtnRegistrar").hide();
                $("#BtnVerificar").fadeIn();              
                     
                
                                
            } else{
                console.log("FADE IN BOTON");
                $("#BtnVerificar").hide();
                $("#VerificarTurno").hide();
                $("#turnoDisponible").fadeIn();
                $("#BtnRegistrar").fadeIn();
                $("#turnoNoDisponible").hide();
                
                

            }
            
        }
       

        

            
           /*  if((search.hora!==hora)&&(search.fecha!==fecha)){
               
            } */
        
}
}