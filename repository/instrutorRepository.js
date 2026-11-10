const db = require('../database/conexao');

async function listarInstrutores() {
  const [rows] = await db.query('SELECT * FROM instrutor ORDER BY id DESC');
  return rows;
}

async function buscarInstrutorPorId(id) {
  const [rows] = await db.query('SELECT * FROM instrutor WHERE id = ?', [id]);
  return rows[0];
}

async function criarInstrutor(dados) {
  const { nome, email, especialidade, ativo = true } = dados;
  const [result] = await db.query(
    'INSERT INTO instrutor (nome, email, especialidade, ativo) VALUES (?, ?, ?, ?)',
    [nome, email, especialidade, ativo]
  );

  return { id: result.insertId, ...dados, ativo };
}

async function atualizarInstrutor(id, dados) {
  const { nome, email, especialidade, ativo } = dados;
  await db.query(
    'UPDATE instrutor SET nome = ?, email = ?, especialidade = ?, ativo = ? WHERE id = ?',
    [nome, email, especialidade, ativo, id]
  );

  return { id, ...dados };
}

async function excluirInstrutor(id) {
  await db.query('DELETE FROM instrutor WHERE id = ?', [id]);
  return true;
}

module.exports = {
  listarInstrutores,
  buscarInstrutorPorId,
  criarInstrutor,
  atualizarInstrutor,
  excluirInstrutor
};