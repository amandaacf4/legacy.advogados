<?php
require __DIR__ . '/conexao.php';
try {
    $consulta = $pdo->query('SELECT * FROM depoimentos ORDER BY data_depoimento DESC, id DESC');
    responder($consulta->fetchAll());
} catch (PDOException $e) {
    responder(['erro' => 'Erro ao consultar depoimentos.'], 500);
}
