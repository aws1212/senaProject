class productoIN_img_Representant{
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

//Event call image representants//
$(document).ready(function () {

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
                const Prod = new productoIN_img_Representant();
                Prod.respuesta_uno(Ress);
            }
        }
        });

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
                
                const Prod = new productoIN_img_Representant();
                Prod.respuesta_dos(Ress);
            }
        }
        });


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
                
                const Prod = new productoIN_img_Representant();
                Prod.respuesta_tres(Ress);
            }
        }
        });

})


//Eventos imagen Representates sin PHP
//Representantes diurna
$("img[id=img_jornada_diurna]").click(function () {
    document.getElementById("answer-div").style.display = "block";
    document.getElementById("question_box").style.display = "none";
    document.getElementById("search_box").style.display = "none";

    document.getElementById("txt_jornada_serch").value = "Diurna";

    $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
    $("#div_images_left").addClass("d-none d-sm-none d-md-block");
})
//Representantes Mixta
$("img[id=img_jornada_mixta]").click(function () {
    document.getElementById("answer-div").style.display = "block";
    document.getElementById("question_box").style.display = "none";
    document.getElementById("search_box").style.display = "none";

    document.getElementById("txt_jornada_serch").value = "Mixta";

    $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
    $("#div_images_left").addClass("d-none d-sm-none d-md-block");
});
//Representantes Nocturna
$("img[id=img_jornada_nocturna]").click(function () {
    document.getElementById("answer-div").style.display = "block";
    document.getElementById("question_box").style.display = "none";
    document.getElementById("search_box").style.display = "none";

    document.getElementById("txt_jornada_serch").value = "Nocturna";

    $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
    $("#div_images_left").addClass("d-none d-sm-none d-md-block");
});