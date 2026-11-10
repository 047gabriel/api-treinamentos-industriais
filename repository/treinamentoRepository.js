const db = require('../database/conexao');

async function listarTreinamentos() {
  const [rows] = await db.query('SELECT * FROM treinamento ORDER BY id DESC');
  return rows;
}

async function buscarTreinamentoPorId(id) {
  const [rows] = await db.query('SELECT * FROM treinamento WHERE id = ?', [id]);
  return rows[0];
}

async function criarTreinamento(dados) {
  const { nome, descricao, instrutor_id, sala_id, data_inicio, data_fim } = dados;
  const [result] = await db.query(
    'INSERT INTO treinamento (nome, descricao, instrutor_id, sala_id, data_inicio, data_fim) VALUES (?, ?, ?, ?, ?, ?)',
    [nome, descricao, instrutor_id, sala_id, data_inicio, data_fim]
  );

  return { id: result.insertId, ...dados };
}

async function atualizarTreinamento(id, dados) {
  const { nome, descricao, instrutor_id, sala_id, data_inicio, data_fim } = dados;
  await db.query(
    'UPDATE treinamento SET nome = ?, descricao = ?, instrutor_id = ?, sala_id = ?, data_inicio = ?, data_fim = ? WHERE id = ?',
    [nome, descricao, instrutor_id, sala_id, data_inicio, data_fim, id]
  );

  return { id, ...dados };
}

async function excluirTreinamento(id) {
  await db.query('DELETE FROM treinamento WHERE id = ?', [id]);
  return true;
}

module.exports = {
  listarTreinamentos,
  buscarTreinamentoPorId,
  criarTreinamento,
  atualizarTreinamento,
  excluirTreinamento
};