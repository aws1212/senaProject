class productoIN_newVocero{
    respuesta_unoDiurna(){
        alert("Error de conexión, intente nuevamente");
    }  
    respuesta_dosDiurna(code){
        document.getElementById('txt_newcode_vocero').value = code;

        setTimeout(function(){
            document.getElementById('txt_newcode_vocero').value = "";
        },5000);
    } 
}
//Eventos del documento (DOM Event)//

document.getElementById('form_code_vocero')
    .addEventListener('submit',function(e){    

        const jornada = document.getElementById('txt_jornada_vocero').value;

        if(jornada === "Diurna")
        {
               
                
            $.ajax({
                 //datos que se envian a traves de ajax
                url:   'php/newcode_voceroDiurna.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_unoDiurna();
                    }
                    else
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_dosDiurna(Ress);
                    }
                }
                });
        }
        if(jornada === "Mixta")
        {
                            
            $.ajax({
                 //datos que se envian a traves de ajax
                url:   'php/newcode_voceroMixta.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_unoDiurna();
                    }
                    else
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_dosDiurna(Ress);
                    }
                }
                });
        }
        if(jornada === "Nocturna")
        {
                
            $.ajax({
                 //datos que se envian a traves de ajax
                url:   'php/newcode_voceroNocturna.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve

                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_unoDiurna();
                    }
                    else
                    {
                        const Prod = new productoIN_newVocero();
                        Prod.respuesta_dosDiurna(Ress);
                    }
                }
                });
        }
       e.preventDefault();
});