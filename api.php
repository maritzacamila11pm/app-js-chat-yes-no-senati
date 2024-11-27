<?php
//Maritza camila Pongo Mamani
$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta =[];

switch ($metodo) {
    case 'GET':
        $respuesta = [
        'mensaje' => 'Metodo Get correcto ',
        'data'=> $_GET
    ];
         break;
    case 'POST':
        $data_entrante = json_decode(file_get_contents("php://input"), true);

        $respuesta = [
            'mensaje' => 'Metodo Post correcto',
            'data'=> $data_entrante
        ];
        break;
    
        default:
            # code...
            break;
    }
    
echo json_encode($respuesta);
//yes no 
$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta =[];

switch ($metodo) {
    case 'GET':
        $respuesta = [
        'mensaje' => 'Metodo Get correcto ',
        'data'=> $_GET
    ];
         break;
}
echo json_encode($respuesta);