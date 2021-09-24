
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $type_Id = $_POST['type_Id'];
    $num_Id = $_POST['num_Id'];
 

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
    