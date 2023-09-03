<?php
    echo "<br />";
    $data = file_get_contents('php://input');
    print_r($data);
    echo "operacion = ";
    echo $_GET["operacion"];
    echo "<br />";
?>