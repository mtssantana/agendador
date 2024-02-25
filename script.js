function adicionarTarefa() {
  event.preventDefault();
  var descricao = document.getElementById('descricao');
  const prazo = document.getElementById('prazo');
  const prioridade = document.getElementById('prioridade');
  var tabela = document
    .getElementById('tabela')
    .getElementsByTagName('tbody')[0];
  var novaLinha = tabela.insertRow();
  novaLinha.insertCell(0).innerText = descricao.value;
  novaLinha.insertCell(1).innerText = formatarData(prazo.value);
  novaLinha.insertCell(2).innerText = prioridade.value;
  descricao.value = '';
  prazo.value = '';

  verificarCampos();
}

function formatarData(data) {
  const dataFormatada = new Date(data);
  return dataFormatada.toLocaleDateString('pt-BR');
}

function verificarCampos() {
  var descricao = document.getElementById('descricao').value;
  var prazo = document.getElementById('prazo').value;
  var prioridade = document.getElementById('prioridade').value;
  var botao = document.getElementById('enviar');

  if (descricao == '' || prazo == '' || prioridade == '') {
    botao.setAttribute('disabled', 'disabled');
  } else {
    botao.removeAttribute('disabled');
  }
}