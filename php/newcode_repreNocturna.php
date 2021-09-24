
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $code = mt_rand(10001,99999);
 
    if($conn === false){
        echo json_encode("Error de conexion");
    }
    else
    {
            $sqlvd = "SELECT imagen FROM code_representante_Nocturna";

            $queryvd=sqlsrv_query($conn,$sqlvd);

            $rowvd=sqlsrv_fetch_array($queryvd);
            
            if($rowvd == null)
            {
                if(move_uploaded_file($_FILES["imagee"]["tmp_name"],"image_repreNocturna/".$_FILES["imagee"]["name"]))
                {
                    $linkimg_Diurna = "http://buzonctt.iswin.be/buzonctt/php/image_repreNocturna/".$_FILES["imagee"]["name"];

                    $sqlivs = "INSERT INTO code_representante_Nocturna(code,imagen)VALUES('$code','$linkimg_Diurna')";
                
                    $queryivd=sqlsrv_query($conn,$sqlivs);
        
                    if($queryivd){

                        $sqlsvd = "SELECT code FROM code_representante_Nocturna";

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
                    echo json_encode("Error de archivo");
                }
                
            }
            else
            {
                $linkCurrent = $rowvd['imagen'];
                $string_Clear = substr($linkCurrent,38);

                if(!unlink($string_Clear))
                {
                    echo json_encode("ErrorBorrado");
                }
                else
                {
                    if(move_uploaded_file($_FILES["imagee"]["tmp_name"],"image_repreNocturna/".$_FILES["imagee"]["name"]))
                    {

                        $linkimg_Diurna = "http://buzonctt.iswin.be/buzonctt/php/image_repreNocturna/".$_FILES["imagee"]["name"];
                        

                        $sqllos = "UPDATE code_representante_Nocturna set code = '$code', imagen = '$linkimg_Diurna'";
                
                        $queryuvd=sqlsrv_query($conn,$sqllos);
            
                        if($queryuvd){

                            $sqllov = "SELECT code FROM code_representante_Nocturna";

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
                    else
                    {
                        echo json_encode("Error de archivo");
                    }
                }
                
            }
        }

        
    