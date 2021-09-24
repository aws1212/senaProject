
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');
    
    $code = mt_rand(10001,99999);
 
    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
        $sqlvd = "SELECT * FROM newcode_vocero_Nocturna";

        $queryvd=sqlsrv_query($conn,$sqlvd);

        $rowvd=sqlsrv_fetch_array($queryvd);
        
        if($rowvd == null)
        {
            $sqlivs = "INSERT INTO newcode_vocero_Nocturna(code)VALUES('$code')";
            
                $queryivd=sqlsrv_query($conn,$sqlivs);
    
                if($queryivd){

                    $sqlsvd = "SELECT code FROM newcode_vocero_Nocturna";

                    $querysvd=sqlsrv_query($conn,$sqlsvd);
            
                    $rowsvd=sqlsrv_fetch_array($querysvd);

                    if($rowsvd == null)
                    {
                        echo json_encode("Error");
                    }
                    else
                    {
                        echo json_encode($rowsvd["code"]);                                    
                    }
    
                }else
                {
                echo json_encode("Error");
                }
        }
        else
        {
            $sqllos = "UPDATE newcode_vocero_Nocturna set code = '$code'";
            
                $queryuvd=sqlsrv_query($conn,$sqllos);
    
                if($queryuvd){

                    $sqllov = "SELECT code FROM newcode_vocero_Nocturna";

                    $queryrsvd=sqlsrv_query($conn,$sqllov);
            
                    $rowrsvd=sqlsrv_fetch_array($queryrsvd);

                    if($rowrsvd == null)
                    {
                        echo json_encode("Error");
                    }
                    else
                    {
                        echo json_encode($rowrsvd["code"]);                                   
                    }
    
                }else
                {
                echo json_encode("Error");
                }
        }
    }