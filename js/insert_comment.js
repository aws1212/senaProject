class producto_comentario{
    constructor(fecha,tipoId,numId,genero,nombres,apellidos,jornada,sede,numFicha,tipOpinion,programa,comentario){
        
        this.fecha = fecha;
        this.tipoId = tipoId;
        this.numId = numId;
        this.genero = genero;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.jornada = jornada;
        this.sede = sede;
        this.numFicha = numFicha;
        this.tipOpinion = tipOpinion;
        this.programa = programa;
        this.comentario = comentario;
    }
}

class productoIN_comentario{
    respuesta_uno(){
        alert("Error de ingreso, intente nuevamente");
    }  
    respuesta_dos(){
        alert("Error de conexión con el servidor, intente más tarde");
    } 
    respuesta_tres(id_comentario){
        
        $('#txt_tipId').prop('selectedIndex',0);
        document.getElementById('txt_numId').value = "";
        $('#txt_genero').prop('selectedIndex',0);
        document.getElementById('txt_name').value = "";
        document.getElementById('txt_lastname').value = "";
        $('#txt_jornada').prop('selectedIndex',0);
        document.getElementById('txt_numFicha').value = "";
        $('#txt_tipOpinion').prop('selectedIndex',0);
        document.getElementById('txt_programa').value = "";
        document.getElementById('txt_comentario').value = "";

        alert("Gracias por su comentario, por favor revise su respuesta con el siguiente codigo: " + id_comentario + "." + "\n" +"Tomese el tiempo de apuntarlo");
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('form_comment')
    .addEventListener('submit',function(e){    

        var f = new Date();

        const fecha = (f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
        const tipoId = document.getElementById('txt_tipId').value;
        const numId = document.getElementById('txt_numId').value;
        const genero = document.getElementById('txt_genero').value;
        const nombres = document.getElementById('txt_name').value;
        const apellidos = document.getElementById('txt_lastname').value;
        const jornada = document.getElementById('txt_jornada').value;
        const sede = document.getElementById('txt_sede').value;
        const numFicha = document.getElementById('txt_numFicha').value;
        const tipOpinion = document.getElementById('txt_tipOpinion').value;
        const programa = document.getElementById('txt_programa').value;
        const comentario = document.getElementById('txt_comentario').value;

       if (tipoId !== "Tipo ID" && numId !== "" && genero !== "Genero" && nombres !== "" && apellidos !== "" && jornada !== "Jornada" &&
       sede !== "" && numFicha !== "" && tipOpinion !== "Tipo de aporte" && programa !== "" && comentario !== ""){

            const datos = new producto_comentario(fecha,tipoId,numId,genero,nombres,apellidos,jornada,sede,numFicha,
                tipOpinion,programa,comentario);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/insert_comment.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);

                if(Ress == "Sin registro")
                {
                    const Prod = new productoIN_comentario();
                    Prod.respuesta_uno();
                }
                else if(Ress == "Error")
                {
                    const Prod = new productoIN_comentario();
                    Prod.respuesta_dos();
                }
                else
                {
                    const Prod = new productoIN_comentario();
                    Prod.respuesta_tres(Ress);
                }
            }
            });
        }
        if (tipoId == "Tipo ID"){

            document.getElementById('txt_tipId').style.color = "#F5502E";

        }
        if (numId == ""){
 
             document.getElementById('txt_numId').style.backgroundColor = "#F5502E";
 
         }
         if (genero == "Genero"){
  
              document.getElementById('txt_genero').style.color = "#F5502E";
  
          }
          if (nombres == ""){
   
               document.getElementById('txt_name').style.backgroundColor = "#F5502E";
   
           }
           if (apellidos == ""){
    
                document.getElementById('txt_lastname').style.backgroundColor = "#F5502E";
    
            }
            if (jornada == "Jornada"){
     
                 document.getElementById('txt_jornada').style.color = "#F5502E";
     
             }
             if (sede == ""){
      
                  document.getElementById('txt_sede').style.backgroundColor = "#F5502E";
      
              }
              if (numFicha == ""){
       
                   document.getElementById('txt_numFicha').style.backgroundColor = "#F5502E";
       
               }
               if (tipOpinion == "Tipo de aporte"){
        
                    document.getElementById('txt_tipOpinion').style.color = "#F5502E";
        
                }
                if (programa == ""){
         
                    document.getElementById('txt_programa').style.backgroundColor = "#F5502E";
         
                 }
                 if (comentario == ""){
          
                    document.getElementById('txt_comentario').style.backgroundColor = "#F5502E";
          
                  }
       
       e.preventDefault();
});