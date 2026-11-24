<?php
header('Content-Type: application/json; charset=utf-8');
function responder($dados, $status = 200) {
    http_response_code($status);
    echo json_encode($dados, JSON_UNESCAPED_UNICODE);
    exit;
}
try {
    $pdo = new PDO('mysql:host=localhost;dbname=legacy_advogados;charset=utf8mb4', 'root', '', [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC]);
} catch (PDOException $e) {
    responder(['erro' => 'Não foi possível conectar ao banco. Confira o MySQL e o banco legacy_advogados.'], 500);
}
