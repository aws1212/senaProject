class producto_representante{
    constructor(code){

        this.code = code;
    }
}
class producto_respi{
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
class producto_delet{
    constructor(id_delete){
        this.id_delete = id_delete;
    }
}
class productoUp_officer{
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
class productoIN_representante{
    respuesta_uno(ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){
        document.getElementById("btn_code_representante").reset();

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
        document.getElementById("diurna_vocero_box").style.display ="none";
        document.getElementById("diurna_representante_box").style.display ="block";

        document.getElementById("txt_name_diurna_Representante").value = Nombres;
        document.getElementById("txt_lastname_diurna_Representante").value = Apellidos;
        document.getElementById("txt_id_diurna_Representante").value = Num_ID;
        document.getElementById("txt_sede_diurna_Representante").value = Sede;
        document.getElementById("txt_jornada_diurna_Representante").value = Jornada;
        document.getElementById("txt_ficha_diurna_Representante").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Representante").value = Programa;
        document.getElementById("txt_comentario_diurna_Representante").value = Comentario;
        var id_opp = ID_Opinion;

        //Eventos del documento (EVENT SEND ANSWER)//

       $("input[id=btn_enviar_diurna_Representante]").click(function (e) {    
            
            const nam = document.getElementById("txt_name_diurna_Representante").value;
            const lastnam = document.getElementById("txt_lastname_diurna_Representante").value;
            const ident = document.getElementById("txt_id_diurna_Representante").value;
            const sed = document.getElementById("txt_sede_diurna_Representante").value;
            const jornad = document.getElementById("txt_jornada_diurna_Representante").value;
            const fich = document.getElementById("txt_ficha_diurna_Representante").value;
            const program = document.getElementById("txt_program_diurna_Representante").value;
            const coment = document.getElementById("txt_comentario_diurna_Representante").value;
            const answ = document.getElementById("txt_respuesta_diurna_Representante").value;

        if (answ !== ""){

                const dats1 = new producto_respi(id_opp,nam,lastnam,ident,sed,jornad,fich,program,coment,answ);
                
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
                        const datoos1 = new producto_delet(id_opp);   
                        $.ajax({
                            data: datoos1,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response1) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress1 = eval(response1);
            
                                if(Ress1 == "Exito")
                                {            
                                    diurnaRep_ajax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Representante").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                    document.getElementById("formSend_diurna_Representante").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Representante").value = "Responder";
                                    count_clicks = 0;
                                    document.getElementById("txt_respuesta_diurna_Representante").value = "";
                                    
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

        $("input[id=btn_delete_diurna_Representante]").click(function (e) {    

                        const datoos2 = new producto_delet(id_opp);   

                        $.ajax({
                            data: datoos2,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response2) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress2 = eval(response2);
            
                                if(Ress2 == "Exito")
                                {            
                                    diurnaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

       $("input[id=btn_escalar_diurna_Representante]").click(function (e) {    
            
            const namd = document.getElementById("txt_name_diurna_Representante").value;
            const lastnamd = document.getElementById("txt_lastname_diurna_Representante").value;
            const identd = document.getElementById("txt_id_diurna_Representante").value;
            const sedd = document.getElementById("txt_sede_diurna_Representante").value;
            const jornadd = document.getElementById("txt_jornada_diurna_Representante").value;
            const fichd = document.getElementById("txt_ficha_diurna_Representante").value;
            const programd = document.getElementById("txt_program_diurna_Representante").value;
            const comentd = document.getElementById("txt_comentario_diurna_Representante").value;

                const dats3 = new productoUp_officer(id_opp,namd,lastnamd,identd,sedd,jornadd,fichd,programd,comentd);
                
            $.ajax({
                data:  dats3, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Officer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response3) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress3 = eval(response3);

                    if(Ress3 == "Exito")
                    {                
                        const datoos3 = new producto_delete(id_opp);   
                        $.ajax({
                            data: datoos3,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response3) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress3 = eval(response3);
            
                                if(Ress3 == "Exito")
                                {            
                                    diurnaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
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

    respuesta_dos(ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){

        document.getElementById("btn_code_representante").reset();

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
        document.getElementById("diurna_vocero_box").style.display ="none";
        document.getElementById("diurna_representante_box").style.display ="block";

        document.getElementById("txt_name_diurna_Representante").value = Nombres;
        document.getElementById("txt_lastname_diurna_Representante").value = Apellidos;
        document.getElementById("txt_id_diurna_Representante").value = Num_ID;
        document.getElementById("txt_sede_diurna_Representante").value = Sede;
        document.getElementById("txt_jornada_diurna_Representante").value = Jornada;
        document.getElementById("txt_ficha_diurna_Representante").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Representante").value = Programa;
        document.getElementById("txt_comentario_diurna_Representante").value = Comentario;
        var id_oppi = ID_Opinion;

        //Eventos del documento (EVENT SEND ANSWER)//

        $("input[id=btn_enviar_diurna_Representante]").click(function (e) {       
            
            const nama = document.getElementById("txt_name_diurna_Representante").value;
            const lastnama = document.getElementById("txt_lastname_diurna_Representante").value;
            const identa = document.getElementById("txt_id_diurna_Representante").value;
            const seda = document.getElementById("txt_sede_diurna_Representante").value;
            const jornada = document.getElementById("txt_jornada_diurna_Representante").value;
            const ficha = document.getElementById("txt_ficha_diurna_Representante").value;
            const programa = document.getElementById("txt_program_diurna_Representante").value;
            const comenta = document.getElementById("txt_comentario_diurna_Representante").value;
            const answa = document.getElementById("txt_respuesta_diurna_Representante").value;

        if (answa !== ""){

                const dats4 = new producto_respi(id_oppi,nama,lastnama,identa,seda,jornada,ficha,programa,comenta,answa);
                
            $.ajax({
                data:  dats4, //datos que se envian a traves de ajax
                url:   'php/answer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response4) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress4 = eval(response4);

                    if(Ress4 == "Exito")
                    {                
                        const datoos4 = new producto_delet(id_oppi);   
                        $.ajax({
                            data: datoos4,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response4) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress4 = eval(response4);
            
                                if(Ress4 == "Exito")
                                {            
                                    mixtaRep_ajax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Representante").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                    document.getElementById("formSend_diurna_Representante").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Representante").value = "Responder";
                                    count_clicks = 0;
                                    document.getElementById("txt_respuesta_diurna_Representante").value = "";
                                    
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

        $("input[id=btn_delete_diurna_Representante]").click(function (e) {     

                        const datoos5 = new producto_delet(id_oppi);   

                        $.ajax({
                            data: datoos5,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response5) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress5 = eval(response5);
            
                                if(Ress5 == "Exito")
                                {            
                                   mixtaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

        $("input[id=btn_escalar_diurna_Representante]").click(function (e) {    
            
            const namz = document.getElementById("txt_name_diurna_Representante").value;
            const lastnamz = document.getElementById("txt_lastname_diurna_Representante").value;
            const identz = document.getElementById("txt_id_diurna_Representante").value;
            const sedz = document.getElementById("txt_sede_diurna_Representante").value;
            const jornadz = document.getElementById("txt_jornada_diurna_Representante").value;
            const fichz = document.getElementById("txt_ficha_diurna_Representante").value;
            const programz = document.getElementById("txt_program_diurna_Representante").value;
            const comentz = document.getElementById("txt_comentario_diurna_Representante").value;

                const dats6 = new productoUp_officer(id_oppi,namz,lastnamz,identz,sedz,jornadz,fichz,programz,comentz);
                
            $.ajax({
                data:  dats6, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Officer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response6) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress6 = eval(response6);

                    if(Ress6 == "Exito")
                    {                
                        const datoos6 = new producto_delete(id_oppi);   
                        $.ajax({
                            data: datoos6,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response6) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress6 = eval(response6);
            
                                if(Ress6 == "Exito")
                                {            
                                    mixtaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
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

    respuesta_tres(ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario){

        document.getElementById("btn_code_representante").reset();

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
        document.getElementById("diurna_vocero_box").style.display ="none";
        document.getElementById("diurna_representante_box").style.display ="block";

        document.getElementById("txt_name_diurna_Representante").value = Nombres;
        document.getElementById("txt_lastname_diurna_Representante").value = Apellidos;
        document.getElementById("txt_id_diurna_Representante").value = Num_ID;
        document.getElementById("txt_sede_diurna_Representante").value = Sede;
        document.getElementById("txt_jornada_diurna_Representante").value = Jornada;
        document.getElementById("txt_ficha_diurna_Representante").value = Num_Ficha;
        document.getElementById("txt_program_diurna_Representante").value = Programa;
        document.getElementById("txt_comentario_diurna_Representante").value = Comentario;
        var id_oppiu = ID_Opinion;

        //Eventos del documento (EVENT SEND ANSWER)//

        $("input[id=btn_enviar_diurna_Representante]").click(function (e) {   
            
            const name = document.getElementById("txt_name_diurna_Representante").value;
            const lastname = document.getElementById("txt_lastname_diurna_Representante").value;
            const idente = document.getElementById("txt_id_diurna_Representante").value;
            const sede = document.getElementById("txt_sede_diurna_Representante").value;
            const jornade = document.getElementById("txt_jornada_diurna_Representante").value;
            const fiche = document.getElementById("txt_ficha_diurna_Representante").value;
            const programe = document.getElementById("txt_program_diurna_Representante").value;
            const comente = document.getElementById("txt_comentario_diurna_Representante").value;
            const answe = document.getElementById("txt_respuesta_diurna_Representante").value;

        if (answe !== ""){

                const dats7 = new producto_respi(id_oppiu,name,lastname,idente,sede,jornade,fiche,programe,comente,answe);
                
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
                        const datoos7 = new producto_delet(id_oppiu);   
                        $.ajax({
                            data: datoos7,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response7) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress7 = eval(response7);
            
                                if(Ress7 == "Exito")
                                {            
                                    nocturnaRep_ajax();
                                                
                                                

                                    document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                    document.getElementById("box_escalar_diurna_Representante").style.display = "block";

                                    document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                    document.getElementById("formSend_diurna_Representante").style.display = "none";
                                    
                                    document.getElementById("btn_responder_diurna_Representante").value = "Responder";
                                    count_clicks = 0;
                                    document.getElementById("txt_respuesta_diurna_Representante").value = "";
                                    
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

        $("input[id=btn_delete_diurna_Representante]").click(function (e) {     

                        const datoos8 = new producto_delet(id_oppiu);   

                        $.ajax({
                            data: datoos8,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response8) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress8 = eval(response8);
            
                                if(Ress8 == "Exito")
                                {            
                                    nocturnaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
                                }
                                else
                                {
                                    
                                }
                            }
                            });
        
        e.preventDefault();
        });

        //Eventos del documento (EVENT UP MESSAGE)//

        $("input[id=btn_escalar_diurna_Representante]").click(function (e) {    
            
            const namf = document.getElementById("txt_name_diurna_Representante").value;
            const lastnamf = document.getElementById("txt_lastname_diurna_Representante").value;
            const identf = document.getElementById("txt_id_diurna_Representante").value;
            const sedf = document.getElementById("txt_sede_diurna_Representante").value;
            const jornadf = document.getElementById("txt_jornada_diurna_Representante").value;
            const fichf = document.getElementById("txt_ficha_diurna_Representante").value;
            const programf = document.getElementById("txt_program_diurna_Representante").value;
            const comentf = document.getElementById("txt_comentario_diurna_Representante").value;

                const dats9 = new productoUp_officer(id_oppiu,namf,lastnamf,identf,sedf,jornadf,fichf,programf,comentf);
                
            $.ajax({
                data:  dats9, //datos que se envian a traves de ajax
                url:   'php/upmessage_to_Officer.php', //archivo que recibe la peticion
                type:  'post', //método de envio
                beforeSend: function () {
                },
                success:  function (response9) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                    
                    var Ress9 = eval(response9);

                    if(Ress9 == "Exito")
                    {                
                        const datoos9 = new producto_delete(id_oppiu);   
                        $.ajax({
                            data: datoos9,//datos que se envian a traves de ajax
                            url:   'php/delete_message_Representante.php', //archivo que recibe la peticion
                            type:  'post', //método de envio
                            beforeSend: function () {
                            },
                            success:  function (response9) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                            
                                var Ress9 = eval(response9);
            
                                if(Ress9 == "Exito")
                                {            
                                    nocturnaRep_ajax();
                                                
                                                

                                        document.getElementById("box_delete_diurna_Representante").style.display = "block";
                                        document.getElementById("box_escalar_diurna_Representante").style.display = "block";
    
                                        document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
                                        document.getElementById("formSend_diurna_Representante").style.display = "none";

                                    
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

document.getElementById('btn_code_representante')
    .addEventListener('submit',function(e){    

        const code = document.getElementById('txt_code_representante').value;

       if (code !== ""){

            const datos = new producto_representante(code);
            
        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/code_representante.php', //archivo que recibe la peticion
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
                    diurnaRep_ajax();
                }
                else if (Ress == "Mixta")
                {
                    mixtaRep_ajax();
                    
                }
                else if (Ress == "Nocturna")
                {
                    nocturnaRep_ajax();                    
                }
            }
            });
        }else{
            alert("Inserte el codigo para continuar");
        }
       
       e.preventDefault();
});

function diurnaRep_ajax()
                    {
                        $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_representante_Diurna.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_representante').value = "";

                                document.getElementById("txt_name_diurna_Representante").value = "";
                                                document.getElementById("txt_lastname_diurna_Representante").value = "";
                                                document.getElementById("txt_id_diurna_Representante").value = "";
                                                document.getElementById("txt_sede_diurna_Representante").value = "";
                                                document.getElementById("txt_jornada_diurna_Representante").value = "";
                                                document.getElementById("txt_ficha_diurna_Representante").value = "";
                                                document.getElementById("txt_program_diurna_Representante").value = "";
                                                document.getElementById("txt_comentario_diurna_Representante").value = "";

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
                                                document.getElementById("diurna_representante_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_representante();
                                Prod.respuesta_uno(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }

function mixtaRep_ajax()
                    {
                        $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_representante_Mixta.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_representante').value = "";

                                document.getElementById("txt_name_diurna_Representante").value = "";
                                                document.getElementById("txt_lastname_diurna_Representante").value = "";
                                                document.getElementById("txt_id_diurna_Representante").value = "";
                                                document.getElementById("txt_sede_diurna_Representante").value = "";
                                                document.getElementById("txt_jornada_diurna_Representante").value = "";
                                                document.getElementById("txt_ficha_diurna_Representante").value = "";
                                                document.getElementById("txt_program_diurna_Representante").value = "";
                                                document.getElementById("txt_comentario_diurna_Representante").value = "";

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
                                                document.getElementById("diurna_representante_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_representante();
                                Prod.respuesta_dos(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }
    
function nocturnaRep_ajax()
                    {
                        $.ajax({  //datos que se envian a traves de ajax
                        url:   'php/mensajes_representante_Nocturna.php', //archivo que recibe la peticion
                        type:  'post', //método de envio
                        beforeSend: function () {
                        },
                        success:  function (responsed) { //una vez que el archivo recibe el request lo procesa y lo devuelve
                           
                            var Resss = eval(responsed);
            
                            if(Resss == "Sin registro")
                            {
                                alert("No hay mensajes pendientes");
                                document.getElementById('txt_code_representante').value = "";

                                document.getElementById("txt_name_diurna_Representante").value = "";
                                                document.getElementById("txt_lastname_diurna_Representante").value = "";
                                                document.getElementById("txt_id_diurna_Representante").value = "";
                                                document.getElementById("txt_sede_diurna_Representante").value = "";
                                                document.getElementById("txt_jornada_diurna_Representante").value = "";
                                                document.getElementById("txt_ficha_diurna_Representante").value = "";
                                                document.getElementById("txt_program_diurna_Representante").value = "";
                                                document.getElementById("txt_comentario_diurna_Representante").value = "";

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
                                                document.getElementById("diurna_representante_box").style.display ="none";
                            }
                            else
                            {
                                const Prod = new productoIN_representante();
                                Prod.respuesta_tres(Resss[0],Resss[1],Resss[2],Resss[3],Resss[4],Resss[5],
                                    Resss[6],Resss[7],Resss[8]);
                            }
                        }
                        });
                    }