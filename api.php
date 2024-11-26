<?php
$metodo = $_SERVER['REQUEST_METHOD'];
$respuesta =[];

switch ($metodo) {
    case 'GET':
        $respuesta = ['mensaje' => 'Metodo Get correcto ',
        'data'=> $_GET
    ];
        break;
    
    default:
        # code...
        break;
}
echo json_encode($respuesta);
