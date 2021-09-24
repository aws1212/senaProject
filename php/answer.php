
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_mes = $_POST['id_mes'];
    $ident = $_POST['ident'];
    $nam = $_POST['nam'];
    $lastnam = $_POST['lastnam'];
    $jornad = $_POST['jornad'];    
    $sed = $_POST['sed'];
    $fich = $_POST['fich'];
    $program = $_POST['program'];
    $coment = $_POST['coment'];
    $answ = $_POST['answ'];

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {
        $sql = "INSERT INTO Answers(ID_Opinion,Num_ID,Nombres,Apellidos,Jornada,Sede,Num_ficha,Programa,Comentario,Respuesta)
        VALUES('$id_mes','$ident','$nam','$lastnam','$jornad','$sed','$fich','$program','$coment','$answ')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query)
            {
                echo json_encode("Exito");
            }else
            {
                echo json_encode(sqlsrv_errors(), true);
            }
    }
    