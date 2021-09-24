
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT TOP 1 ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_Ficha,Programa,Comentario 
                FROM Opinion WHERE Jornada = 'Mixta'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode(Array($row["ID_Opinion"],$row["Num_ID"],$row["Nombres"],$row["Apellidos"],
                    $row["Jornada"],$row["Sede"],$row["Num_Ficha"],$row["Programa"],$row["Comentario"]));
                }

        
        
        
    }
    