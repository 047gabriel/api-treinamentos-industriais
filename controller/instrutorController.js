const {
  listarInstrutores,
  buscarInstrutorPorId,
  criarInstrutor,
  atualizarInstrutor,
  excluirInstrutor
} = require('../repository/instrutorRepository');

async function index(req, res) {
  try {
    const instrutores = await listarInstrutores();
    res.json(instrutores);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar instrutores', error: error.message });
  }
}

async function show(req, res) {
  try {
    const instrutor = await buscarInstrutorPorId(req.params.id);
    if (!instrutor) return res.status(404).json({ message: 'Instrutor não encontrado' });
    res.json(instrutor);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar instrutor', error: error.message });
  }
}

async function store(req, res) {
  try {
    const instrutor = await criarInstrutor(req.body);
    res.status(201).json(instrutor);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar instrutor', error: error.message });
  }
}

async function update(req, res) {
  try {
    const instrutor = await atualizarInstrutor(req.params.id, req.body);
    res.json(instrutor);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar instrutor', error: error.message });
  }
}

async function destroy(req, res) {
  try {
    await excluirInstrutor(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir instrutor', error: error.message });
  }
}

module.exports = { index, show, store, update, destroy };