
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $code = $_POST['code'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

                $sqls = "SELECT code FROM newcode_vocero_Diurna WHERE code = '$code'";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    $sqlsm = "SELECT code FROM newcode_vocero_Mixta WHERE code = '$code'";

                    $querysm=sqlsrv_query($conn,$sqlsm);
            
                    $rowm=sqlsrv_fetch_array($querysm);
                    
                    if($rowm == null)
                    {
                        $sqlsm = "SELECT code FROM newcode_vocero_Nocturna WHERE code = '$code'";

                        $querysm=sqlsrv_query($conn,$sqlsm);
                
                        $rowm=sqlsrv_fetch_array($querysm);
                        
                        if($rowm == null)
                        {
                            echo json_encode("Sin registro");
                        }
                        else
                        {
                            echo json_encode("Nocturna");
                        }
                    }
                    else
                    {
                        echo json_encode("Mixta");
                    }
                }
                else
                {
                    echo json_encode("Diurna");
                }

        
        
        
    }
    