<?php
require __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') responder(['erro' => 'Use POST.'], 405);
$nome = trim((string) ($_POST['nome'] ?? ''));
$comentario = trim((string) ($_POST['comentario'] ?? ''));
if ($nome === '' || strlen($nome) > 480 || $comentario === '' || strlen($comentario) > 8000) responder(['erro' => 'Confira os campos informados.'], 400);
try {
    $comando = $pdo->prepare('INSERT INTO depoimentos (nome, comentario) VALUES (?, ?)');
    $comando->execute([$nome, $comentario]);
    responder(['mensagem' => 'Registro gravado com sucesso!'], 201);
} catch (PDOException $e) {
    responder(['erro' => 'Não foi possível gravar o registro.'], 500);
}
