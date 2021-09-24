
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $code = $_POST['code'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT code FROM code_funcionario WHERE code = '$code'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode("Exito");
                }

        
        
        
    }
    