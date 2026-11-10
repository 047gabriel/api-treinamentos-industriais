const {
  listarSalas,
  buscarSalaPorId,
  criarSala,
  atualizarSala,
  excluirSala
} = require('../repository/salaRepository');

async function index(req, res) {
  try {
    const salas = await listarSalas();
    res.json(salas);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar salas', error: error.message });
  }
}

async function show(req, res) {
  try {
    const sala = await buscarSalaPorId(req.params.id);
    if (!sala) return res.status(404).json({ message: 'Sala não encontrada' });
    res.json(sala);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar sala', error: error.message });
  }
}

async function store(req, res) {
  try {
    const sala = await criarSala(req.body);
    res.status(201).json(sala);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar sala', error: error.message });
  }
}

async function update(req, res) {
  try {
    const sala = await atualizarSala(req.params.id, req.body);
    res.json(sala);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar sala', error: error.message });
  }
}

async function destroy(req, res) {
  try {
    await excluirSala(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir sala', error: error.message });
  }
}

module.exports = { index, show, store, update, destroy };