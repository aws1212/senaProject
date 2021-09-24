//Scripts evento Fontibon//
$(document).ready(function () {

    $("input[id=btn_exit_sede]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "block";
        document.getElementById("cargo_box").style.display = "none";
        document.getElementById("code_funcionario_box").style.display ="none";
        document.getElementById("code_representante_box").style.display ="none";
        document.getElementById("code_vocero_box").style.display ="none";
        document.getElementById("inpage_officer_box").style.display ="none";
        document.getElementById("register_vocero_box").style.display ="none";

        document.getElementById('txt_tipId').style.color = "black";
        document.getElementById('txt_numId').style.backgroundColor = "white";
        document.getElementById('txt_genero').style.color = "black";
        document.getElementById('txt_name').style.backgroundColor = "white";
        document.getElementById('txt_lastname').style.backgroundColor = "white";
        document.getElementById('txt_jornada').style.color = "black";
        document.getElementById('txt_sede').style.backgroundColor = "white";
        document.getElementById('txt_numFicha').style.backgroundColor = "white";
        document.getElementById('txt_tipOpinion').style.color = "black";
        document.getElementById('txt_programa').style.backgroundColor = "white";
        document.getElementById('txt_comentario').style.backgroundColor = "white";

       document.getElementById("form_comment").reset();
    });
});

//Scripts evento Boton volver//
$(document).ready(function () {

    $("input[id=btn_exit_search]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "block";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton volver-Cargo//
$(document).ready(function () {

    $("input[id=btn_exit_cargo]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "block";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton imagen principal//
$(document).ready(function () {

    $("img[id=btn_principal_image]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "block";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton imagen funcionario//
$(document).ready(function () {

    $("img[id=img_funcionario]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="block";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton imagen representante//
$(document).ready(function () {

    $("img[id=img_representante]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="block";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton imagen vocero//
$(document).ready(function () {

    $("img[id=img_vocero]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="block";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton btn_exit_code_funcionario//
$(document).ready(function () {

    $("input[id=btn_exit_code_funcionario]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "block";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton btn_exit_code_funcionario//
$(document).ready(function () {

    $("input[id=btn_exit_code_representante]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "block";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";
       document.getElementById('txt_code_representante').value = "";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton btn_exit_code_vocero//
$(document).ready(function () {

    $("input[id=btn_exit_code_vocero]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "block";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";           
        document.getElementById('txt_code_vocero').value = "";
    });

});


//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {

    $("input[id=btn_exit_inpage_officer]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "block";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});


//Scripts evento img newvocero_diurna//
$(document).ready(function () {

    $("img[id=img_vocero_diurna]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="none";
       document.getElementById("register_vocero_box").style.display ="block";
       document.getElementById("txt_jornada_vocero").value = "Diurna";


       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
    });

});

//Scripts evento Boton btn_exit_officer//
$(document).ready(function () {

    $("input[id=btn_exit_newvocero]").click(function () {
       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
       document.getElementById("cargo_box").style.display = "none";
       document.getElementById("code_funcionario_box").style.display ="none";
       document.getElementById("code_representante_box").style.display ="none";
       document.getElementById("code_vocero_box").style.display ="none";
       document.getElementById("inpage_officer_box").style.display ="block";
       document.getElementById("register_vocero_box").style.display ="none";

       document.getElementById("form_search").reset();
       document.getElementById("txt_aprendicce_search").value = "";
        document.getElementById("txt_message_aprendicce").value = "";   
        document.getElementById("txt_message_represent").value = "";   
        document.getElementById('txt_newcode_vocero').value = "";
            document.getElementById('txt_numId_vocero').value = "";
            document.getElementById('txt_numFicha_vocero').value = "";
    });

});
