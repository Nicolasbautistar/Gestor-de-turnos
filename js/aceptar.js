function Aceptar(){

    $("#inputs2").submit(function(e){
        e.preventDefault();
        
        console.log(e.target);
    });

    $("#contenedor3").hide(1000);
    $("#turno").fadeIn(1000);
    $("#imagen").fadeIn(1000);

    document.getElementById("nombre").value="";
    document.getElementById("email").value=""; 
    document.getElementById("doc").value=""; 
    document.getElementById("consulta").value=0; 
    document.getElementById("fecha").value=""; 
    document.getElementById("hora").value=""; 

}