<?php
header('Access-Control-Allow-Origin: *');
$articles = array(
    array(
        'id' => 1,
        'marque' => 'stop dust',
        'nom' => 'aspirateur 5000',
        'prix' => '150'
    ),
    array(
        'id'=> 2,
        'marque' => 'toupropre',
        'nom' => 'machine à lessiver 2000',
        'prix' => '500'
    ),
    array(
        'id'=> 3,
        'marque' => 'vitaminix',
        'nom' => 'blender 1000',
        'prix' => '250'
    ),
    array(
        'id'=>4 ,
        'marque' => 'hal computer',
        'nom' => 'peer',
        'prix' => '1500'
    )
);

echo json_encode($articles);
