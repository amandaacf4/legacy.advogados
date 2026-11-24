<?php
require __DIR__ . '/conexao.php';
try {
    $consulta = $pdo->query('SELECT * FROM servicos ORDER BY id ASC');
    responder($consulta->fetchAll());
} catch (PDOException $e) {
    responder(['erro' => 'Erro ao consultar servicos.'], 500);
}
