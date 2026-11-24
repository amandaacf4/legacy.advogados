# Legacy Advogados — A1.3

Projeto acadêmico. Depoimentos, serviços e contato integrados ao MariaDB por PHP/PDO e JavaScript.

1. Copie a pasta trabalho para C:/xampp/htdocs/.
2. Inicie Apache e MySQL no XAMPP.
3. Abra http://localhost/phpmyadmin/ e importe banco.sql.
4. Abra http://localhost/trabalho/ (não use Live Server).
5. Teste serviços, adicione depoimento e envie contato com dados fictícios. Confira as tabelas no phpMyAdmin.
6. Exporte o banco pelo phpMyAdmin em SQL para a pasta do projeto antes de publicar no GitHub. Não publique dados reais de clientes.

Conexão padrão XAMPP: localhost, root, senha vazia. Ajuste backend/conexao.php se necessário; não publique senhas reais.

## Como funciona
- listar_depoimentos.php e listar_servicos.php: SELECT, fetchAll e JSON.
- inserir_depoimento.php e inserir_contato.php: POST, prepare, execute e JSON.
- js/script.js: fetch, FormData, loops e criação de elementos DOM.
- banco.sql: três tabelas e dados iniciais do site original.
