
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $variable = $_POST['variable'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT New_notification FROM new_notification";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode($row["New_notification"]);
                }

        
        
        
    }
    