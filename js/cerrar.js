function Cerrar (){

    $("#inputs").submit(function(e){
        e.preventDefault();
        
        console.log(e.target);
    });

    $(".modal").hide(1); 

    

    $("#turno").fadeIn(500);
    $("#contenedor2").hide(1);
    $("#imagen").fadeIn(1); 
    $("#contenedor").hide(1);
    
    document.getElementById("nombre").value="";
    document.getElementById("email").value=""; 
    document.getElementById("doc").value=""; 
    document.getElementById("consulta").value=0; 
    document.getElementById("fecha").value=""; 
    document.getElementById("hora").value=""; 
    
    

}