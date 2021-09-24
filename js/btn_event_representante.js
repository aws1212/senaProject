var count_clicks = 0;
//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {
    $("input[id=btn_responder_diurna_Representante]").click(function () {
        if (count_clicks == 0)
        {
            document.getElementById("box_escalar_diurna_Representante").style.display = "none";

            document.getElementById("box_respuesta_diurna_Representante").style.display = "block";
            document.getElementById("formSend_diurna_Representante").style.display = "block";
            document.getElementById("btn_responder_diurna_Representante").value = "Anular";

            count_clicks = 1;
        }
        else if(count_clicks == 1)
        {
            document.getElementById("box_escalar_diurna_Representante").style.display = "block";

            document.getElementById("box_respuesta_diurna_Representante").style.display = "none";
            document.getElementById("formSend_diurna_Representante").style.display = "none";
            document.getElementById("btn_responder_diurna_Representante").value = "Responder";

            count_clicks = 0;
        }
    });
});

//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {

    $("input[id=btn_volver_diurna_Representante]").click(function () {
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

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
        document.getElementById('txt_newcode_vocero').value = "";
            document.getElementById('txt_numId_vocero').value = "";
            document.getElementById('txt_numFicha_vocero').value = "";
    });

});