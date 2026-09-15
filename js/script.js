// JavaScript simples e didático: ano automático e retorno do formulário.
document.getElementById('anoAtual').textContent = new Date().getFullYear();
const formulario = document.getElementById('formContato');
if (formulario) formulario.addEventListener('submit', function(evento) { evento.preventDefault(); document.getElementById('retornoForm').textContent = 'Mensagem registrada para demonstração.'; formulario.reset(); });
