

function Registro (id, nombre, email, doc, fecha, hora, consulta){
    this.id=id;
    this.nombre=nombre;
    this.email=email;            
    this.doc=doc;
    this.fecha=fecha;
    this.hora=hora;
    this.consulta=consulta;
  }

  let listaRegistro = []; 
  let id=0;

  listaRegistro.push(new Registro(id,"PRUEBA", "DEL", "PRIMER", "REGISTRO", "0", "0")); 
  
  /*
  TUVE QUE PUSHEAR UN PRIMER OBJETO PORQUE CUANDO REALIZABA EL FOR OF PARA 
  VERIFICAR DATOS REPETIDOS Y EL ARREGLO ESTABA VACÍO ME GENERABA CONFLICTO.
  */
