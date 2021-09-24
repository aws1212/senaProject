
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_delete = $_POST['id_delete'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "DELETE Opinion_representante WHERE ID_Opinion = '$id_delete'";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode("Error");
            }
    }
    