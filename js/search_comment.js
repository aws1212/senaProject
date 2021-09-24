class producto_search{
    constructor(codMensaje,numId,jornada){

        this.codMensaje = codMensaje;
        this.numId = numId;
        this.jornada = jornada;
    }
}

class productoIN_search{
    respuesta_uno(){
        alert("Aún no hay respuesta, verifique luego");
        
        document.getElementById('txt_cod_message').value = "";
        document.getElementById('txt_Id_search').value = "";        
    }  
    respuesta_dos(Nombre_completo,Comentario,Respuesta){
        document.getElementById("form_search").reset();

        document.getElementById("txt_aprendicce_search").value = Nombre_completo;
        document.getElementById("txt_message_aprendicce").value = Comentario;
        document.getElementById("txt_message_represent").value = Respuesta;
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('form_search')
    .addEventListener('submit',function(e){    

        const codMensaje = document.getElementById('txt_cod_message').value;
        const numId = document.getElementById('txt_Id_search').value;        
        const jornada = document.getElementById('txt_jornada_serch').value;

       if (numId !== "" && codMensaje !== "" && jornada !== ""){

            const datos = new producto_search(codMensaje,numId,jornada);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/search_comment.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);

                if(Ress == "Sin registro")
                {
                    const Prod = new productoIN_search();
                    Prod.respuesta_uno();
                }
                else
                {
                    const Prod = new productoIN_search();
                    Prod.respuesta_dos(Ress[0],Ress[1],Ress[2]);
                }
            }
            });
        }else{
            alert("Rellene todos los campos para la busqueda");
        }
       
       e.preventDefault();
});