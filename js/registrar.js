        

		function Registrar (){

            let nombre= $("input#nombre").val();           
            let email=  $("input#email").val();
            let consulta= $("#consulta").val();
            let doc= $("#doc").val();
            let fecha=  $("input#fecha").val(); 
            let hora= $("input#hora").val();
            let hour=hora.substr(0,2);
            let minutes=hora.substr(-2);
            
            hour=parseInt(hour);
            minutes=parseInt(minutes);
            console.log(hour);
            console.log(minutes);             

            id= id+1;                    
            listaRegistro.push(new Registro(id,nombre, email, doc, fecha, hora, consulta));
            localStorage.setItem("USUARIO"+(id), JSON.stringify(listaRegistro[id])); 
            $("#contenedor2").hide(1000);
            $("#contenedor3").fadeIn(1000);
                                          
            document.getElementById("datos2").innerHTML="Nombre: " + nombre + "<br> Código de Turno: " + id + "<br> Fecha: " + fecha + "<br> Hora: " + hora;
            //console.log(JSON.parse(localStorage.getItem("USUARIO")));                        
                
                   
        }
                    
              
               
        
                
                    
                   
                   
                   
                 
                           						   
            
        

            