var count_clickr = 0;
//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {
    $("input[id=btn_responder_diurna_Funcionario]").click(function () {
        if (count_clickr == 0)
        {
            document.getElementById("box_escalar_diurna_Representante").style.display = "none";

            document.getElementById("box_respuesta_diurna_Funcionario").style.display = "block";
            document.getElementById("formSend_diurna_Funcionario").style.display = "block";
            document.getElementById("btn_responder_diurna_Funcionario").value = "Anular";

            count_clickr = 1;
        }
        else if(count_clickr == 1)
        {
            document.getElementById("box_escalar_diurna_Representante").style.display = "block";

            document.getElementById("box_respuesta_diurna_Funcionario").style.display = "none";
            document.getElementById("formSend_diurna_Funcionario").style.display = "none";
            document.getElementById("btn_responder_diurna_Funcionario").value = "Responder";

            count_clickr = 0;
        }
    });
});

//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {

    $("input[id=btn_volver_diurna_Funcionario]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="block";
       document.getElementById("register_vocero_box").style.display ="none";
       document.getElementById("diurna_vocero_box").style.display ="none";
       document.getElementById("diurna_representante_box").style.display ="none";
       document.getElementById("diurna_funcionario_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
        document.getElementById('txt_newcode_vocero').value = "";
        document.getElementById('txt_numId_vocero').value = "";
        document.getElementById('txt_numFicha_vocero').value = "";
    });

});



class producto_respfuncionario{
    constructor(id_mes,nam,lastnam,ident,sed,jornad,fich,program,coment,answ){
        this.id_mes = id_mes;
        this.nam = nam;
        this.lastnam = lastnam;
        this.ident = ident;
        this.sed = sed;
        this.jornad = jornad;
        this.fich = fich;
        this.program = program;
        this.coment = coment;
        this.answ = answ;
    }
}
class producto_deletefuncionario{
    constructor(id_delete){
        this.id_delete = id_delete;
    }
}
class productoUp_funcionario{
    constructor(id_message,nombres,apellidos,numId,sede,jornada,numFicha,programa,comentario){
        
        this.id_message = id_message;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.numId = numId;
        this.sede = sede;
        this.jornada = jornada;
        this.numFicha = numFicha;
        this.programa = programa;
        this.comentario = comentario;
    }
}
class productoIN_funcionario{
    respuesta_uno(ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){

        document.getElementById("diurna_funcionario_box").style.display ="block";        
        document.getElementById("answer-div").style.display = "none";
        document.getElementById("question_box").style.display = "none";
        document.getElementById("search_box").style.display = "none";
        document.getElementById("cargo_box").style.display = "none";
        document.getElementById("code_funcionario_box").style.display ="none";
        document.getElementById("code_representante_box").style.display ="none";
        document.getElementById("code_vocero_box").style.display ="none";
        document.getElementById("inpage_officer_box").style.display ="none";
        document.getElementById("register_vocero_box").style.display ="none";
        document.getElementById("diurna_vocero_box").style.display ="none";
        document.getElementById("diurna_representante_box").style.display ="none";

        document.getElementById("txt_name_diurna_Funcionario").value = Nombres;
        document.getElementById("txt_lastname_diurna_Funcionario").value = Apellidos;
        document.getElementById("txt_id_diurna_Funcionario").value = Num_ID;
        document.getElementById("txt_sede_diurna_Funcionario").value = Sede;
        document.getElementById("txt_jornada_diurna_Funcionario").value = Jornada;
        document.getElementById("txt_ficha_diurna_Funcionario").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Funcionario").value = Programa;
        document.getElementById("txt_comentario_diurna_Funcionario").value = Comentario;
        var id_comment = ID_Opinion;

        //Eventos del documento (EVENT SEND ANSWER)//

        $("input[id=btn_enviar_diurna_Funcionario]").click(function (e) {      
            
            const nam = document.getElementById("txt_name_diurna_Funcionario").value;
            const lastnam = document.getElementById("txt_lastname_diurna_Funcionario").value;
            const ident = document.getElementById("txt_id_diurna_Funcionario").value;
            const sed = document.getElementById("txt_sede_diurna_Funcionario").value;
            const jornad = document.getElementById("txt_jornada_diurna_Funcionario").value;
            const fich = document.getElementById("txt_ficha_diurna_Funcionario").value;
            const program = document.getElementById("txt_program_diurna_Funcionario").value;
            const coment = document.getElementById("txt_comentario_diurna_Funcionario").value;
            const answ = document.getElementById("txt_respuesta_diurna_Funcionario").value;

        if (answ !== ""){

                const dats = new producto_respfuncionario(id_comment,nam,lastnam,ident,sed,jornad,fich,program,coment,answ);
                
            $.ajax({
                data:  dats, //datos que se envian a traves de ajax
                url:   'php/answer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {                
                        const datoos = new producto_deletefuncionario(id_comment);   
                        $.ajax({
                            data: datoos,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Officer.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress = eval(response);
            
                                if(Ress == "Exito")
                                {            
                                   officer_ajax();

                                    document.getElementById("box_escalar_diurna_Funcionario").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Funcionario").style.display = "none";
                                    document.getElementById("formSend_diurna_Funcionario").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Funcionario").value = "Responder";
                                    count_clickr = 0;
                                    document.getElementById("txt_respuesta_diurna_Funcionario").value = "";
                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
                    }
                    else
                    {
                        
                    }
                }
                });
            }else{
                alert("Escriba su respuesta");
            }
        
        e.preventDefault();
        });
        

        //Eventos del documento (EVENT UP MESSAGE)//

         $("input[id=box_escalar_diurna_Funcionario]").click(function (e) {       
            
            const namc = document.getElementById("txt_name_diurna_Funcionario").value;
            const lastnamc = document.getElementById("txt_lastname_diurna_Funcionario").value;
            const identc = document.getElementById("txt_id_diurna_Funcionario").value;
            const sedc = document.getElementById("txt_sede_diurna_Funcionario").value;
            const jornadc = document.getElementById("txt_jornada_diurna_Funcionario").value;
            const fichc = document.getElementById("txt_ficha_diurna_Funcionario").value;
            const programc = document.getElementById("txt_program_diurna_Funcionario").value;
            const comentc = document.getElementById("txt_comentario_diurna_Funcionario").value;

            const dats = new productoUp_representant(id_comment,namc,lastnamc,identc,sedc,jornadc,fichc,programc,comentc);
                
            $.ajax({
                data:  dats, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Representant.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress = eval(response);

                    if(Ress == "Exito")
                    {                
                        const datoos = new producto_deletefuncionario(ID_Opinion);   
                        $.ajax({
                            data: datoos,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Officer.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress = eval(response);
            
                                if(Ress == "Exito")
                                {            
                                    officer_ajax();

                                    document.getElementById("box_escalar_diurna_Funcionario").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Funcionario").style.display = "none";
                                    document.getElementById("formSend_diurna_Funcionario").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Funcionario").value = "Responder";
                                    count_clickr = 0;
                                    document.getElementById("txt_respuesta_diurna_Funcionario").value = "";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
                    }
                    else
                    {
                        
                    }
                }
                });
        
        e.preventDefault();
        });

    }
}



//Scripts evento archivo_officer//
$(document).ready(function () {

    $("input[id=btn_archivo_officer_box]").click(function () {
       
        officer_ajax();
       
    });

});

function officer_ajax()
        {
            $.ajax({  //datos que se envian a traves de ajax
        url:   'php/mensajes_funcionario.php', //archivo que recibe la peticion
        type:  'post', //método de envio
        beforeSend: function () {
        },
        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
           
            var Resss = eval(responsed);

            if(Resss == "Sin registro")
            {
                alert("No hay mensajes pendientes");

                document.getElementById("txt_name_diurna_Funcionario").value = "";
                                                document.getElementById("txt_lastname_diurna_Funcionario").value = "";
                                                document.getElementById("txt_id_diurna_Funcionario").value = "";
                                                document.getElementById("txt_sede_diurna_Funcionario").value = "";
                                                document.getElementById("txt_jornada_diurna_Funcionario").value = "";
                                                document.getElementById("txt_ficha_diurna_Funcionario").value = "";
                                                document.getElementById("txt_program_diurna_Funcionario").value = "";
                                                document.getElementById("txt_comentario_diurna_Funcionario").value = "";

                                                document.getElementById("diurna_funcionario_box").style.display ="none";        
                                                document.getElementById("answer-div").style.display = "none";
                                                document.getElementById("question_box").style.display = "none";
                                                document.getElementById("search_box").style.display = "none";
                                                document.getElementById("cargo_box").style.display = "none";
                                                document.getElementById("code_funcionario_box").style.display ="none";
                                                document.getElementById("code_representante_box").style.display ="none";
                                                document.getElementById("code_vocero_box").style.display ="none";
                                                document.getElementById("inpage_officer_box").style.display ="block";
                                                document.getElementById("register_vocero_box").style.display ="none";
                                                document.getElementById("diurna_vocero_box").style.display ="none";
                                                document.getElementById("diurna_representante_box").style.display ="none";
            }
            else
            {
                const Prod = new productoIN_funcionario();
                Prod.respuesta_uno(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                    Resss[6],Resss[7],Resss[8]);
            }
        }
            });
        }