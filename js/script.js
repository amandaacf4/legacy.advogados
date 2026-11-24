document.getElementById('anoAtual').textContent = new Date().getFullYear();
// Chama o PHP e converte a resposta JSON em um objeto JavaScript.
async function consultarPHP(arquivo, opcoes = {}) {
    const resposta = await fetch('backend/' + arquivo, opcoes);
    const dados = await resposta.json();
    if (!resposta.ok || dados.erro) throw new Error(dados.erro || 'Erro na requisição.');
    return dados;
}
function elemento(tag, classe, texto) {
    const item = document.createElement(tag);
    item.className = classe;
    if (texto !== undefined) item.textContent = texto;
    return item;
}
async function listarDepoimentos() {
    const lista = document.getElementById('listaDepoimentos');
    try {
        const dados = await consultarPHP('listar_depoimentos.php');
        lista.replaceChildren();
        for (const d of dados) {
            const coluna = elemento('div', 'col-md-4');
            const card = elemento('blockquote', 'depoimentos h-100');
            if (d.foto) {
                const foto = elemento('img', ''); foto.src = d.foto; foto.alt = d.nome; card.append(foto);
            }
            const data = d.data_depoimento.slice(0,10).split('-').reverse().join('/');
            card.append(elemento('p', '', '“' + d.comentario + '”'), elemento('small', '', data), elemento('footer', '', d.nome));
            coluna.append(card); lista.append(coluna);
        }
        if (!dados.length) lista.textContent = 'Nenhum depoimento cadastrado.';
    } catch (erro) { lista.textContent = erro.message; }
}
async function listarServicos() {
    const lista = document.getElementById('listaServicos');
    try {
        const dados = await consultarPHP('listar_servicos.php');
        lista.replaceChildren();
        for (const s of dados) {
            const coluna = elemento('div', 'col-md-4');
            const card = elemento('article', 'service-card h-100');
            const imagem = elemento('img', ''); imagem.src = s.imagem; imagem.alt = s.titulo;
            const corpo = elemento('div', 'card-content');
            const preco = elemento('p', 'price', 'A partir de ');
            preco.append(elemento('strong', '', Number(s.preco).toLocaleString('pt-BR', {style:'currency', currency:'BRL'})));
            const link = elemento('a', 'btn btn-dark w-100', 'Conheça o serviço'); link.href = s.pagina;
            corpo.append(elemento('i', 'bi ' + s.icone), elemento('h3', '', s.titulo), elemento('p', '', s.descricao), preco, link);
            card.append(imagem, corpo); coluna.append(card); lista.append(coluna);
        }
        if (!dados.length) lista.textContent = 'Nenhum serviço cadastrado.';
    } catch (erro) { lista.textContent = erro.message; }
}
// FormData coleta os campos name do formulário; POST envia os dados ao PHP.
async function gravarFormulario(evento, arquivo, idRetorno, atualizar) {
    evento.preventDefault();
    const form = evento.currentTarget;
    const retorno = document.getElementById(idRetorno);
    const botao = form.querySelector('button[type="submit"]');
    botao.disabled = true;
    retorno.textContent = 'Gravando...';
    try {
        const dados = await consultarPHP(arquivo, {method: 'POST', body: new FormData(form)});
        retorno.textContent = dados.mensagem;
        form.reset();
        if (atualizar) await atualizar();
    } catch (erro) { retorno.textContent = erro.message; }
    finally { botao.disabled = false; }
}
document.getElementById('formDepoimento').addEventListener('submit', evento => gravarFormulario(evento, 'inserir_depoimento.php', 'retornoDepoimento', listarDepoimentos));
document.getElementById('formContato').addEventListener('submit', evento => gravarFormulario(evento, 'inserir_contato.php', 'retornoForm'));
listarDepoimentos();
listarServicos();
