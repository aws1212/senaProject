
class producto_voccero{
    constructor(code){

        this.code = code;
    }
}
class producto_resp{
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
class producto_delete{
    constructor(id_delete){
        this.id_delete = id_delete;
    }
}
class productoUp_representant{
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
class productoIN_voccero{
    respuesta_uno(ID_Opinio,Num_I,Nombre,Apellido,Jornad,Sed,Num_Fich,Program,Comentari){

        document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";
       document.getElementById("register_representante_box").style.display ="none";
        document.getElementById("diurna_vocero_box").style.display ="block";


        document.getElementById("txt_name_diurna_Vocero").value = Nombre;
        document.getElementById("txt_lastname_diurna_Vocero").value = Apellido;
        document.getElementById("txt_id_diurna_Vocero").value = Num_I;
        document.getElementById("txt_sede_diurna_Vocero").value = Sed;
        document.getElementById("txt_jornada_diurna_Vocero").value = Jornad;
        document.getElementById("txt_ficha_diurna_Vocero").value = Num_Fich;
        document.getElementById("txt_program_diurna_Vocero").value = Program;
        document.getElementById("txt_comentario_diurna_Vocero").value = Comentari;
        var id_opp = ID_Opinio;

        //Eventos del documento (EVENT SEND ANSWER)//

        $("input[id=btn_enviar_diurna_Vocero]").click(function (e) {   
            
            
            var nam = document.getElementById("txt_name_diurna_Vocero").value;
            var lastnam = document.getElementById("txt_lastname_diurna_Vocero").value;
            var ident = document.getElementById("txt_id_diurna_Vocero").value;
            var sed = document.getElementById("txt_sede_diurna_Vocero").value;
            var jornad = document.getElementById("txt_jornada_diurna_Vocero").value;
            var fich = document.getElementById("txt_ficha_diurna_Vocero").value;
            var program = document.getElementById("txt_program_diurna_Vocero").value;
            var coment = document.getElementById("txt_comentario_diurna_Vocero").value;
            var answ = document.getElementById("txt_respuesta_diurna_Vocero").value;

        if (answ !== ""){

                const dats1 = new producto_resp(id_opp,nam,lastnam,ident,sed,jornad,fich,program,coment,answ);
                
                
            $.ajax({
                data:  dats1, //datos que se envian a traves de ajax
                url:   'php/answer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response1) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress1 = eval(response1);

                    if(Ress1 == "Exito")
                    {                
                        const datoos1 = new producto_delete(id_opp);   
                        $.ajax({
                            data: datoos1,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response1) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress1 = eval(response1);
            
                                if(Ress1 == "Exito")
                                {            
                                   diurnaAjax();                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("formSend_diurna_Vocero").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Vocero").value = "Responder";
                                    count_click = 0;
                                    document.getElementById("txt_respuesta_diurna_Vocero").value = "";
                                    
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


        //Eventos del documento (EVENT DELETE MESSAGE)//

        $("input[id=btn_delete_diurna_Vocero]").click(function (e) {       

                        const datoosd2 = new producto_delete(id_opp);   

                        $.ajax({
                            data: datoosd2,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (responsed2) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ressd2 = eval(responsed2);
            
                                if(Ressd2 == "Exito")
                                {            
                                   diurnaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";
                                    count_click = 0;
                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

        $("input[id=btn_escalar_diurna_Vocero]").click(function (e) {     
            
            const namc = document.getElementById("txt_name_diurna_Vocero").value;
            const lastnamc = document.getElementById("txt_lastname_diurna_Vocero").value;
            const identc = document.getElementById("txt_id_diurna_Vocero").value;
            const sedc = document.getElementById("txt_sede_diurna_Vocero").value;
            const jornadc = document.getElementById("txt_jornada_diurna_Vocero").value;
            const fichc = document.getElementById("txt_ficha_diurna_Vocero").value;
            const programc = document.getElementById("txt_program_diurna_Vocero").value;
            const comentc = document.getElementById("txt_comentario_diurna_Vocero").value;

            const datst3 = new productoUp_representant(id_opp,namc,lastnamc,identc,sedc,jornadc,fichc,programc,comentc);
                
            $.ajax({
                data:  datst3, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Representant.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (responset3) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Resst3 = eval(responset3);

                    if(Resst3 == "Exito")
                    {                
                        const datoost3 = new producto_delete(id_opp);   
                        $.ajax({
                            data: datoost3,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (responset3) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Resst3 = eval(responset3);
            
                                if(Resst3 == "Exito")
                                {            
                                    diurnaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";
                                    count_click = 0;

                                    
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
        


    

    respuesta_dos(ID_Opini,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){
        document.getElementById("btn_code_vocero").reset();

        document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";
       document.getElementById("register_representante_box").style.display ="none";
        document.getElementById("diurna_vocero_box").style.display ="block";

        document.getElementById("txt_name_diurna_Vocero").value = Nombres;
        document.getElementById("txt_lastname_diurna_Vocero").value = Apellidos;
        document.getElementById("txt_id_diurna_Vocero").value = Num_ID;
        document.getElementById("txt_sede_diurna_Vocero").value = Sede;
        document.getElementById("txt_jornada_diurna_Vocero").value = Jornada;
        document.getElementById("txt_ficha_diurna_Vocero").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Vocero").value = Programa;
        document.getElementById("txt_comentario_diurna_Vocero").value = Comentario;
        var id_oppm = ID_Opini;

        //Eventos del documento (EVENT SEND ANSWER)//

         $("input[id=btn_enviar_diurna_Vocero]").click(function (e) {    
            
            const nama = document.getElementById("txt_name_diurna_Vocero").value;
            const lastnama = document.getElementById("txt_lastname_diurna_Vocero").value;
            const identa = document.getElementById("txt_id_diurna_Vocero").value;
            const seda = document.getElementById("txt_sede_diurna_Vocero").value;
            const jornada = document.getElementById("txt_jornada_diurna_Vocero").value;
            const ficha = document.getElementById("txt_ficha_diurna_Vocero").value;
            const programa = document.getElementById("txt_program_diurna_Vocero").value;
            const comenta = document.getElementById("txt_comentario_diurna_Vocero").value;
            const answa = document.getElementById("txt_respuesta_diurna_Vocero").value;

        if (answa !== ""){

                const datsc4 = new producto_resp(id_oppm,nama,lastnama,identa,seda,jornada,ficha,programa,comenta,answa);
                
            $.ajax({
                data:  datsc4, //datos que se envian a traves de ajax
                url:   'php/answer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (responsec4) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ressc4 = eval(responsec4);

                    if(Ressc4 == "Exito")
                    {                
                        const datoosc4 = new producto_delete(id_oppm);   
                        $.ajax({
                            data: datoosc4,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (responsec4) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ressc4 = eval(responsec4);
            
                                if(Ressc4 == "Exito")
                                {            
                                    mixtaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("formSend_diurna_Vocero").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Vocero").value = "Responder";
                                    count_click = 0;
                                    document.getElementById("txt_respuesta_diurna_Vocero").value = "";
                                    
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
        }else
        {
            alert("Escriba su respuesta");
        }
        
        e.preventDefault();
        });


        //Eventos del documento (EVENT DELETE MESSAGE)//

        $("input[id=btn_delete_diurna_Vocero]").click(function (e) {   

                        const datooss5 = new producto_delete(id_oppm);   

                        $.ajax({
                            data: datooss5,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (responses5) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Resss5 = eval(responses5);
            
                                if(Resss5 == "Exito")
                                {            
                                   mixtaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

        $("input[id=btn_escalar_diurna_Vocero]").click(function (e) {     
            
            const namg = document.getElementById("txt_name_diurna_Vocero").value;
            const lastnamg = document.getElementById("txt_lastname_diurna_Vocero").value;
            const identg = document.getElementById("txt_id_diurna_Vocero").value;
            const sedg = document.getElementById("txt_sede_diurna_Vocero").value;
            const jornadg = document.getElementById("txt_jornada_diurna_Vocero").value;
            const fichg = document.getElementById("txt_ficha_diurna_Vocero").value;
            const programg = document.getElementById("txt_program_diurna_Vocero").value;
            const comentg = document.getElementById("txt_comentario_diurna_Vocero").value;

            const dats6 = new productoUp_representant(id_oppm,namg,lastnamg,identg,sedg,jornadg,fichg,programg,comentg);
                
            $.ajax({
                data:  dats6, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Representant.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response6) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress6 = eval(response6);

                    if(Ress6 == "Exito")
                    {                
                        const datoos6 = new producto_delete(id_oppm);   
                        $.ajax({
                            data: datoos6,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response6) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress6 = eval(response6);
            
                                if(Ress6 == "Exito")
                                {            
                                    mixtaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";

                                    
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

    respuesta_tres(ID_Opin,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){
        document.getElementById("btn_code_vocero").reset();

        document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";
       document.getElementById("register_representante_box").style.display ="none";
        document.getElementById("diurna_vocero_box").style.display ="block";

        document.getElementById("txt_name_diurna_Vocero").value = Nombres;
        document.getElementById("txt_lastname_diurna_Vocero").value = Apellidos;
        document.getElementById("txt_id_diurna_Vocero").value = Num_ID;
        document.getElementById("txt_sede_diurna_Vocero").value = Sede;
        document.getElementById("txt_jornada_diurna_Vocero").value = Jornada;
        document.getElementById("txt_ficha_diurna_Vocero").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Vocero").value = Programa;
        document.getElementById("txt_comentario_diurna_Vocero").value = Comentario;
        var id_oppn = ID_Opin;

        //Eventos del documento (EVENT SEND ANSWER)//

         $("input[id=btn_enviar_diurna_Vocero]").click(function (e) {     
            
            const namw = document.getElementById("txt_name_diurna_Vocero").value;
            const lastnamw = document.getElementById("txt_lastname_diurna_Vocero").value;
            const identw = document.getElementById("txt_id_diurna_Vocero").value;
            const sedw = document.getElementById("txt_sede_diurna_Vocero").value;
            const jornadw = document.getElementById("txt_jornada_diurna_Vocero").value;
            const fichw = document.getElementById("txt_ficha_diurna_Vocero").value;
            const programw = document.getElementById("txt_program_diurna_Vocero").value;
            const comentw = document.getElementById("txt_comentario_diurna_Vocero").value;
            const answw = document.getElementById("txt_respuesta_diurna_Vocero").value;

        if (answw !== ""){

                const dats7 = new producto_resp(id_oppn,namw,lastnamw,identw,sedw,jornadw,fichw,programw,comentw,answw);
                
            $.ajax({
                data:  dats7, //datos que se envian a traves de ajax
                url:   'php/answer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response7) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress7 = eval(response7);

                    if(Ress7 == "Exito")
                    {                
                        const datoos7 = new producto_delete(id_oppn);   
                        $.ajax({
                            data: datoos7,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response7) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress7 = eval(response7);
            
                                if(Ress7 == "Exito")
                                {            
                                    nocturnaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("formSend_diurna_Vocero").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Vocero").value = "Responder";
                                    count_click = 0;
                                    document.getElementById("txt_respuesta_diurna_Vocero").value = "";
                                    
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


        //Eventos del documento (EVENT DELETE MESSAGE)//

        $("input[id=btn_delete_diurna_Vocero]").click(function (e) {    

                        const datoos8 = new producto_delete(id_oppn);   

                        $.ajax({
                            data: datoos8,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response8) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress8 = eval(response8);
            
                                if(Ress8 == "Exito")
                                {            
                                    nocturnaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

        $("input[id=btn_escalar_diurna_Vocero]").click(function (e) {    
            
            const namh = document.getElementById("txt_name_diurna_Vocero").value;
            const lastnamh = document.getElementById("txt_lastname_diurna_Vocero").value;
            const identh = document.getElementById("txt_id_diurna_Vocero").value;
            const sedh = document.getElementById("txt_sede_diurna_Vocero").value;
            const jornadh = document.getElementById("txt_jornada_diurna_Vocero").value;
            const fichh = document.getElementById("txt_ficha_diurna_Vocero").value;
            const programh = document.getElementById("txt_program_diurna_Vocero").value;
            const comenth = document.getElementById("txt_comentario_diurna_Vocero").value;

                const dats9 = new productoUp_representant(id_oppn,namh,lastnamh,identh,sedh,jornadh,fichh,programh,comenth);
                
            $.ajax({
                data:  dats9, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Representant.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response9) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress9 = eval(response9);

                    if(Ress9 == "Exito")
                    {                
                        const datoos9 = new producto_delete(id_oppn);   
                        $.ajax({
                            data: datoos9,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Vocero.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response9) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress9 = eval(response9);
            
                                if(Ress9 == "Exito")
                                {            
                                    nocturnaAjax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Vocero").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Vocero").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Vocero").style.display = "none";
                                    document.getElementById("box_enviar_diurna_Vocero").style.display = "none";

                                    
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


//Eventos del documento (DOM Event)//

document.getElementById('btn_code_vocero')
    .addEventListener('submit',function(e){    

        const code = document.getElementById('txt_code_vocero').value;

       if (code !== ""){

            const datos = new producto_voccero(code);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/code_vocero.php', //archivo que recibe la peticion
            type:  'post', //método de envio
            beforeSend: function () {
            },
            success:  function (response) { //una vez que el archivo recibe el request lo procesa y lo devuelve
               
                var Ress = eval(response);

                if(Ress == "Sin registro")
                {
                    alert("Codigo incorrecto")
                }
                else if (Ress == "Diurna")
                {
                    diurnaAjax();
                    
                }
                else if (Ress == "Mixta")
                {
                    mixtaAjax();
                   
                }
                else if (Ress == "Nocturna")
                {
                    nocturnaAjax();
                    
                }
            }
            });
        }else{
            alert("Inserte el codigo para continuar");
        }
       
       e.preventDefault();
});

function diurnaAjax()
                    {
                        $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_vocero_Diurna.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_vocero').value = "";
                                
                                                document.getElementById("txt_name_diurna_Vocero").value = "";
                                                document.getElementById("txt_lastname_diurna_Vocero").value = "";
                                                document.getElementById("txt_id_diurna_Vocero").value = "";
                                                document.getElementById("txt_sede_diurna_Vocero").value = "";
                                                document.getElementById("txt_jornada_diurna_Vocero").value = "";
                                                document.getElementById("txt_ficha_diurna_Vocero").value = "";
                                                document.getElementById("txt_program_diurna_Vocero").value = "";
                                                document.getElementById("txt_comentario_diurna_Vocero").value = "";

                                                document.getElementById("answer-div").style.display = "none";
                                                document.getElementById("question_box").style.display = "none";
                                                document.getElementById("search_box").style.display = "none";
                                                document.getElementById("cargo_box").style.display = "block";
                                                document.getElementById("code_funcionario_box").style.display ="none";
                                                document.getElementById("code_representante_box").style.display ="none";
                                                document.getElementById("code_vocero_box").style.display ="none";
                                                document.getElementById("inpage_officer_box").style.display ="none";
                                                document.getElementById("register_vocero_box").style.display ="none";
                                                document.getElementById("diurna_vocero_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_voccero();
                                Prod.respuesta_uno(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }

function mixtaAjax()
                    {
                         $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_vocero_Mixta.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_vocero').value = "";

                                document.getElementById("txt_name_diurna_Vocero").value = "";
                                                document.getElementById("txt_lastname_diurna_Vocero").value = "";
                                                document.getElementById("txt_id_diurna_Vocero").value = "";
                                                document.getElementById("txt_sede_diurna_Vocero").value = "";
                                                document.getElementById("txt_jornada_diurna_Vocero").value = "";
                                                document.getElementById("txt_ficha_diurna_Vocero").value = "";
                                                document.getElementById("txt_program_diurna_Vocero").value = "";
                                                document.getElementById("txt_comentario_diurna_Vocero").value = "";

                                                document.getElementById("answer-div").style.display = "none";
                                                document.getElementById("question_box").style.display = "none";
                                                document.getElementById("search_box").style.display = "none";
                                                document.getElementById("cargo_box").style.display = "block";
                                                document.getElementById("code_funcionario_box").style.display ="none";
                                                document.getElementById("code_representante_box").style.display ="none";
                                                document.getElementById("code_vocero_box").style.display ="none";
                                                document.getElementById("inpage_officer_box").style.display ="none";
                                                document.getElementById("register_vocero_box").style.display ="none";
                                                document.getElementById("diurna_vocero_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_voccero();
                                Prod.respuesta_dos(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }

function nocturnaAjax()
                    {
                        $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_vocero_Nocturna.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_vocero').value = "";

                                document.getElementById("txt_name_diurna_Vocero").value = "";
                                                document.getElementById("txt_lastname_diurna_Vocero").value = "";
                                                document.getElementById("txt_id_diurna_Vocero").value = "";
                                                document.getElementById("txt_sede_diurna_Vocero").value = "";
                                                document.getElementById("txt_jornada_diurna_Vocero").value = "";
                                                document.getElementById("txt_ficha_diurna_Vocero").value = "";
                                                document.getElementById("txt_program_diurna_Vocero").value = "";
                                                document.getElementById("txt_comentario_diurna_Vocero").value = "";

                                                document.getElementById("answer-div").style.display = "none";
                                                document.getElementById("question_box").style.display = "none";
                                                document.getElementById("search_box").style.display = "none";
                                                document.getElementById("cargo_box").style.display = "block";
                                                document.getElementById("code_funcionario_box").style.display ="none";
                                                document.getElementById("code_representante_box").style.display ="none";
                                                document.getElementById("code_vocero_box").style.display ="none";
                                                document.getElementById("inpage_officer_box").style.display ="none";
                                                document.getElementById("register_vocero_box").style.display ="none";
                                                document.getElementById("diurna_vocero_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_voccero();
                                Prod.respuesta_tres(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }