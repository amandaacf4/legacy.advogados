CREATE DATABASE IF NOT EXISTS legacy_advogados CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE legacy_advogados;
CREATE TABLE IF NOT EXISTS depoimentos (
 id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(120) NOT NULL, comentario TEXT NOT NULL,
 foto VARCHAR(255) DEFAULT NULL, data_depoimento DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS contatos (
 id INT AUTO_INCREMENT PRIMARY KEY, nome VARCHAR(120) NOT NULL, email VARCHAR(254) NOT NULL,
 mensagem TEXT NOT NULL, data_envio DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE IF NOT EXISTS servicos (
 id INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(150) NOT NULL, descricao TEXT NOT NULL,
 preco DECIMAL(10,2) NOT NULL, imagem VARCHAR(255) NOT NULL, icone VARCHAR(60) NOT NULL, pagina VARCHAR(255) NOT NULL
);
INSERT IGNORE INTO depoimentos (id,nome,comentario,foto,data_depoimento) VALUES
(1,'Ricardo Almeida','Orientações claras, agilidade e muita segurança nas decisões.','img/cliente1.png','2026-08-05 00:00:00'),
(2,'Fernanda Martins','A postura profissional e a transparência da equipe transmitiram confiança.','img/cliente2.png','2026-06-20 00:00:00'),
(3,'Marcos Oliveira','Transformaram um assunto técnico em orientações práticas sobre LGPD.','img/cliente3.png','2026-04-19 00:00:00');
INSERT IGNORE INTO servicos (id,titulo,descricao,preco,imagem,icone,pagina) VALUES
(1,'Direito Criminal','Defesa, orientação preventiva e estratégia jurídica.',350,'img/criminal1.png','bi-shield-check','criminal.html'),
(2,'Direito Empresarial','Contratos, negociações e prevenção de riscos.',400,'img/empresarial.png','bi-building','empresarial.html'),
(3,'Direito Digital, LGPD e IA','Privacidade, proteção de dados e novas tecnologias.',450,'img/digital1.png','bi-fingerprint','digital.html');
