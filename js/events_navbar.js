function objetiveView(e){
    $("#div_vision").removeClass("d-none d-sm-none d-md-block");
       $("#div_mision").removeClass("d-none d-sm-none d-md-block");

       $("#div_vision").addClass("d-block d-sm-block d-md-none");
       $("#div_mision").addClass("d-block d-sm-block d-md-none");

       $("#div_logo").addClass("d-none d-sm-none d-md-block");
      
       $("#div_images_left").removeClass("d-block d-sm-block d-md-none");
       $("#div_images_left").addClass("d-none d-sm-none d-md-block");

       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";
}

function sarchView(e){
    $("#div_vision").removeClass("d-block d-sm-block d-md-none");
       $("#div_mision").removeClass("d-block d-sm-block d-md-none");

    $("#div_vision").addClass("d-none d-sm-none d-md-block");
       $("#div_mision").addClass("d-none d-sm-none d-md-block");

       $("#div_logo").removeClass("d-none d-sm-none d-md-block");
       $("#div_logo").addClass("d-none d-sm-none d-md-block");

       $("#div_images_left").removeClass("d-none d-sm-none d-md-block");
       $("#div_images_left").addClass("d-block d-sm-block d-md-none");

       document.getElementById("answer-div").style.display = "none";
       document.getElementById("question_box").style.display = "none";
       document.getElementById("search_box").style.display = "none";

}