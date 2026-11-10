const db = require('../database/conexao');

async function listarSalas() {
  const [rows] = await db.query('SELECT * FROM sala ORDER BY id DESC');
  return rows;
}

async function buscarSalaPorId(id) {
  const [rows] = await db.query('SELECT * FROM sala WHERE id = ?', [id]);
  return rows[0];
}

async function criarSala(dados) {
  const { nome, capacidade, ativa = true } = dados;
  const [result] = await db.query(
    'INSERT INTO sala (nome, capacidade, ativa) VALUES (?, ?, ?)',
    [nome, capacidade, ativa]
  );

  return { id: result.insertId, ...dados, ativa };
}

async function atualizarSala(id, dados) {
  const { nome, capacidade, ativa } = dados;
  await db.query(
    'UPDATE sala SET nome = ?, capacidade = ?, ativa = ? WHERE id = ?',
    [nome, capacidade, ativa, id]
  );

  return { id, ...dados };
}

async function excluirSala(id) {
  await db.query('DELETE FROM sala WHERE id = ?', [id]);
  return true;
}

module.exports = {
  listarSalas,
  buscarSalaPorId,
  criarSala,
  atualizarSala,
  excluirSala
};