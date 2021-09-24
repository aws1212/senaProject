class producto_officer{
    constructor(code){

        this.code = code;
    }
}

class productoIN_officer{
    respuesta_uno(){
        alert("Codigo incorrecto");
        
        document.getElementById("btn_code_funcionario").reset();
    }  
    respuesta_dos(){
        document.getElementById("btn_code_funcionario").reset();   
        
        document.getElementById("answer-div").style.display = "none";
        document.getElementById("question_box").style.display = "none";
        document.getElementById("search_box").style.display = "none";
        document.getElementById("cargo_box").style.display = "none";
        document.getElementById("code_funcionario_box").style.display ="none";
        document.getElementById("code_representante_box").style.display ="none";
        document.getElementById("code_vocero_box").style.display ="none";
        document.getElementById("inpage_officer_box").style.display ="block";
 
        document.getElementById("form_search").reset();
        document.getElementById("txt_aprendicce_search").value = "";
         document.getElementById("txt_message_aprendicce").value = "";   
         document.getElementById("txt_message_represent").value = "";      
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('btn_code_funcionario')
    .addEventListener('submit',function(e){    

        const code = document.getElementById('txt_code_funcionario').value;

       if (code !== ""){

            const datos = new producto_officer(code);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/code_officer.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);

                if(Ress == "Sin registro")
                {
                    const Prod = new productoIN_officer();
                    Prod.respuesta_uno();
                }
                else if (Ress == "Exito")
                {
                    const Prod = new productoIN_officer();
                    Prod.respuesta_dos();
                }
            }
            });
        }else{
            alert("Inserte el codigo para continuar");
        }
       
       e.preventDefault();
});