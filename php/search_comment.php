
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $codMensaje = $_POST['codMensaje'];
    $numId = $_POST['numId'];
    $jornada = $_POST['jornada'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT Nombres,Apellidos,Comentario,Respuesta FROM Answers WHERE ID_Opinion = '$codMensaje'
                and Num_ID = '$numId' and Jornada = '$jornada'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["Nombres"].' '.$row["Apellidos"],$row["Comentario"],$row["Respuesta"]));
                }

        
        
        
    }
    