<?php
require __DIR__ . '/conexao.php';
if ($_SERVER['REQUEST_METHOD'] !== 'POST') responder(['erro' => 'Use POST.'], 405);
$nome = trim((string) ($_POST['nome'] ?? ''));
$email = trim((string) ($_POST['email'] ?? ''));
$mensagem = trim((string) ($_POST['mensagem'] ?? ''));
if ($nome === '' || strlen($nome) > 480 || $email === '' || strlen($email) > 1016 || $mensagem === '' || strlen($mensagem) > 20000 || !filter_var($email, FILTER_VALIDATE_EMAIL)) responder(['erro' => 'Confira os campos informados.'], 400);
try {
    $comando = $pdo->prepare('INSERT INTO contatos (nome, email, mensagem) VALUES (?, ?, ?)');
    $comando->execute([$nome, $email, $mensagem]);
    responder(['mensagem' => 'Registro gravado com sucesso!'], 201);
} catch (PDOException $e) {
    responder(['erro' => 'Não foi possível gravar o registro.'], 500);
}
