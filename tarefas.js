var dadosLista = [];

function salvarUser(){
  let TarefaUser=document.getElementById("TarefaUser").value;
  if(TarefaUser){
      dadosLista.push(TarefaUser);
      criarLista();
      document.getElementById('TarefaUser').value = '';

  }

}

// FUNÇÃO PARA CRIAR LISTA DE USUÁRIO

function criarLista(){
let tabela = document.getElementById('tabela').innerHTML = "<tr><th> Tarefas </th><th>Ações</th></tr>";
for(let i = 0;i <= (dadosLista.length - 1);i++){
  tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'  onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
  document.getElementById('tabela').innerHTML = tabela;


  }

}

// FUNÇÃO PARA EDITAR NOME

function editar(i){

  document.getElementById('TarefaUser').value = dadosLista [(i - 1)];

  dadosLista.splice(dadosLista[(i-1)], 1);

}

// FUNÇÃO PARA EXCLUIR NOME

function excluir(i){
  dadosLista.splice((i - 1), 1);
  document.getElementById('tabela').deleteRow(i);

 

}

