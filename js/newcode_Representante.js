class productoIN_imginsert_Representant{
    respuesta_uno(link){

            document.getElementById('secondbox_img_jornada_diurna').remove();
            const pNit_current_panel = document.getElementById('box_img_jornada_diurna');
            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="absolute h-full w-full" id="secondbox_img_jornada_diurna">
                        <img id="img_jornada_diurna" src="http://buzonctt.iswin.be/php/image_repreDiurna/${link}" class="h-full w-full relative cursor-pointer">            
                    </div>                    
            `;
            pNit_current_panel.appendChild(element);

            $("img[id=img_jornada_diurna]").click(function () {
            document.getElementById("answer-div").style.display = "block";
            document.getElementById("question_box").style.display = "none";
            document.getElementById("search_box").style.display = "none";

            document.getElementById("txt_jornada_serch").value = "Diurna";

            $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
            $("#div_images_left").addClass("d-none d-sm-none d-md-block");
       
    });
    }  
    respuesta_dos(linkn){

        document.getElementById('secondbox_img_jornada_mixta').remove();
            const pNit_current_panel = document.getElementById('box_img_jornada_mixta');
            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="absolute h-full w-full" id="secondbox_img_jornada_mixta">
                        <img id="img_jornada_mixta" src="http://buzonctt.iswin.be/php/image_repreMixta/${linkn}" class="h-full w-full relative cursor-pointer">            
                    </div>                    
            `;
            pNit_current_panel.appendChild(element);

            $("img[id=img_jornada_mixta]").click(function () {
            document.getElementById("answer-div").style.display = "block";
            document.getElementById("question_box").style.display = "none";
            document.getElementById("search_box").style.display = "none";

            document.getElementById("txt_jornada_serch").value = "Mixta";

            $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
            $("#div_images_left").addClass("d-none d-sm-none d-md-block");
            });
    } 
    respuesta_tres(links){

         document.getElementById('secondbox_img_jornada_nocturna').remove();
            const pNit_current_panel = document.getElementById('box_img_jornada_nocturna');
            const element = document.createElement('div');
            element.innerHTML = `
                    <div class="absolute h-full w-full" id="secondbox_img_jornada_nocturna">
                        <img id="img_jornada_nocturna" src="http://buzonctt.iswin.be/php/image_repreNocturna/${links}" class="h-full w-full relative cursor-pointer">            
                    </div>                    
            `;
            pNit_current_panel.appendChild(element);

            $("img[id=img_jornada_nocturna]").click(function () {
            document.getElementById("answer-div").style.display = "block";
            document.getElementById("question_box").style.display = "none";
            document.getElementById("search_box").style.display = "none";

            document.getElementById("txt_jornada_serch").value = "Nocturna";

            $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
            $("#div_images_left").addClass("d-none d-sm-none d-md-block");
            });
    } 
}

class productoIN_newRepresentante{
    respuesta_unoDiurna(){
        alert("Error de conexión, intente nuevamente");
    }  
    respuesta_dosDiurna(code){
        document.getElementById('txt_newcode_representante').value = code;

        setTimeout(function(){
            document.getElementById('txt_newcode_representante').value = "";
            document.getElementById('btn_img_coderepresentante').value = "";
        },5000);

        $.ajax({
        //datos que se envian a traves de ajax
        url:   'php/call_image_Represent_Diurna.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
           
          
            var Ress = eval(response);

            if(Ress == "Sin registro")
            {
                
            }
            else
            {
                const Prod = new productoIN_imginsert_Representant();
                Prod.respuesta_uno(Ress);
            }
        }
        });
    } 
    respuesta_dosMixta(){
        alert("Error de conexión, intente nuevamente");
    }  
    respuesta_dosMixta(code){
        document.getElementById('txt_newcode_representante').value = code;

        setTimeout(function(){
            document.getElementById('txt_newcode_representante').value = "";
            document.getElementById('btn_img_coderepresentante').value = "";
        },5000);

        $.ajax({
        //datos que se envian a traves de ajax
        url:   'php/call_image_Represent_Mixta.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
          
            var Ress = eval(response);

            if(Ress == "Sin registro")
            {

            }
            else
            {
                
                const Prod = new productoIN_imginsert_Representant();
                Prod.respuesta_dos(Ress);
            }
        }
        });
    }
    respuesta_tresNocturna(){
        alert("Error de conexión, intente nuevamente");
    }  
    respuesta_tresNocturna(code){
        document.getElementById('txt_newcode_representante').value = code;

        setTimeout(function(){
            document.getElementById('txt_newcode_representante').value = "";
            document.getElementById('btn_img_coderepresentante').value = "";
        },5000);

        $.ajax({
        //datos que se envian a traves de ajax
        url:   'php/call_image_Represent_Nocturna.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
           
            var Ress = eval(response);

            if(Ress == "Sin registro")
            {
                
            }
            else
            {
                
                const Prod = new productoIN_imginsert_Representant();
                Prod.respuesta_tres(Ress);
            }
        }
        });
    }
}
//Eventos del documento (DOM Event)//

document.getElementById('form_code_representante')
    .addEventListener('submit',function(e){    
        
        var jornada = $('#txt_jornada_representante').val();

        if(jornada === "Diurna")
        {
            var formData = new FormData();
            var imagee = $("#btn_img_coderepresentante")[0].files[0];
            formData.append('imagee',imagee);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/newcode_repreDiurna.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_unoDiurna();
                    }
                    else
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_dosDiurna(Ress);
                    }
                }

            });

        }     
        if(jornada === "Mixta")
        {
            var formData = new FormData();
            var imagee = $("#btn_img_coderepresentante")[0].files[0];
            formData.append('imagee',imagee);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/newcode_repreMixta.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_dosMixta();
                    }
                    else
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_dosMixta(Ress);
                    }
                }

            });

        }
        if(jornada === "Nocturna")
        {
            var formData = new FormData();
            var imagee = $("#btn_img_coderepresentante")[0].files[0];
            formData.append('imagee',imagee);

            $.ajax({
                data:  formData, //datos que se envian a traves de ajax
                url:   'php/newcode_repreNocturna.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                contentType: false,
                processData: false,
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                   
                    var Ress = eval(response);

                    if(Ress == "Error")
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_tresNocturna();
                    }
                    else
                    {
                        const Prod = new productoIN_newRepresentante();
                        Prod.respuesta_tresNocturna(Ress);
                    }
                }

            });

        }
       
       e.preventDefault();
       
});