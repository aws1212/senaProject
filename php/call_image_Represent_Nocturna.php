
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
                $sqls = "SELECT imagen FROM code_representante_Nocturna";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    $string = $row['imagen'];
                    $string_Clear = substr($string,58);
                    echo json_encode($string_Clear);
                }
        
    }
    