
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT TOP 1 ID_Opinion,Nombres,Num_ID,Apellidos,Sede,Jornada,Num_ficha,Programa,Comentario 
                FROM Opinion_funcionario";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["ID_Opinion"],$row["Num_ID"],$row["Nombres"],$row["Apellidos"],
                    $row["Jornada"],$row["Sede"],$row["Num_ficha"],$row["Programa"],$row["Comentario"]));
                }

        
        
        
    }
    