
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $id_opinion = $_POST['id_message'];
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];    
    $numId = $_POST['numId'];
    $sede = $_POST['sede'];
    $jornada = $_POST['jornada'];
    $numFicha = $_POST['numFicha'];
    $programa = $_POST['programa'];
    $comentario = $_POST['comentario'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "INSERT INTO Opinion_funcionario(ID_Opinion,Nombres,Apellidos,Num_ID,Sede,Jornada,Num_ficha,Programa,Comentario)
        VALUES('$id_opinion','$nombres','$apellidos','$numId','$sede','$jornada','$numFicha',
        '$programa','$comentario')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

            echo json_encode("Exito");

            }else
            {
            echo json_encode("Error");
            }
    }
    