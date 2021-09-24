class product_notify{
    constructor(variable){

        this.variable = variable;
    }
}

class productIN_notify{
    respuesta_uno(notify){
        //Scripts evento notification//
        if(!("Notification" in window)){
            alert("Tu navegador no soporta notificaciones")
        }else if(Notification.permission === "granted"){
            //New notification true//
            var notification = new Notification(notify);
        }else if(Notification.permission !== "denied"){
            Notification.requestPermission(function(permission){
                if(Notification.permission === "granted"){
                    var notification = new Notification(notify)
                }
            });
        }
    }  
}
//Eventos del documento (DOM Event)//

//Scripts evento Fontibon//
$(document).ready(function (e) {
        
        const datos = "variable";

        $.ajax({
            data:  datos, //datos que se envian a traves de ajax
            url:   'php/notification.php', //archivo que recibe la peticion
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
                    const Prod = new productIN_notify();
                    Prod.respuesta_uno(Ress);
                }
            }
            });
            
        });     