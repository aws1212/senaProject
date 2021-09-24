
<?php
    
    include("../php/Connect.php");
    mb_internal_encoding('UTF-8');

    $fecha = $_POST['fecha'];
    $tipoId = $_POST['tipoId'];
    $numId = $_POST['numId'];
    $genero = $_POST['genero'];
    $nombres = $_POST['nombres'];
    $apellidos = $_POST['apellidos'];
    $jornada = $_POST['jornada'];
    $sede = $_POST['sede'];
    $numFicha = $_POST['numFicha'];
    $tipOpinion = $_POST['tipOpinion'];
    $programa = $_POST['programa'];
    $comentario = $_POST['comentario'];
 

    if($conn === false){
        echo json_encode("Error de conexion");
    }else
    {

        $sql = "INSERT INTO Opinion(Fecha_opinion,Tipo_ID,Num_ID,Genero,Nombres,Apellidos,Jornada,Sede,Num_ficha,Tipo_opinion,
        Programa,Comentario,Leido)VALUES('$fecha','$tipoId','$numId','$genero','$nombres','$apellidos','$jornada',
        '$sede','$numFicha','$tipOpinion','$programa','$comentario','NO')";
        
            $query=sqlsrv_query($conn,$sql);

            if($query){

                $sqls = "SELECT ID_Opinion FROM Opinion Order by ID_Opinion desc";

                $querys=sqlsrv_query($conn,$sqls);
        
                $row=sqlsrv_fetch_array($querys);
                
                if($row == null)
                {
                    echo json_encode("Sin registro");
                }
                else
                {
                    echo json_encode($row["ID_Opinion"]);
                }

            }else
            {
            echo json_encode("Error");
            }

        
        
        
    }
    