class producto_searchAprendicce{
    constructor(type_Id, num_Id){
        
        this.type_Id = type_Id;
        this.num_Id = num_Id;
    }
}

class productoIN_searchAprendicce{
    respuesta_uno(){
        
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

        alert("Gracias por su comentario, por favor revise su respuesta con el siguiente codigo: " + id_comentario);
    } 
}
//Eventos del documento (DOM Event)//

function search_Aprendicce(){
        
        const tipoId = document.getElementById('txt_tipId').value;
        const numId = document.getElementById('txt_numId').value;

       if (type_Id !== "Tipo ID" && num_Id !== ""){

            const datos = new producto_comentario(type_Id,num_Id);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/search_aprendicce.php', //archivo que recibe la peticion
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
            
        }else{
            
        }

}
