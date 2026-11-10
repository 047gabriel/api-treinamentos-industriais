const {
  listarTreinamentos,
  buscarTreinamentoPorId,
  criarTreinamento,
  atualizarTreinamento,
  excluirTreinamento
} = require('../repository/treinamentoRepository');

async function index(req, res) {
  try {
    const treinamentos = await listarTreinamentos();
    res.json(treinamentos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar treinamentos', error: error.message });
  }
}

async function show(req, res) {
  try {
    const treinamento = await buscarTreinamentoPorId(req.params.id);
    if (!treinamento) return res.status(404).json({ message: 'Treinamento não encontrado' });
    res.json(treinamento);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar treinamento', error: error.message });
  }
}

async function store(req, res) {
  try {
    const treinamento = await criarTreinamento(req.body);
    res.status(201).json(treinamento);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar treinamento', error: error.message });
  }
}

async function update(req, res) {
  try {
    const treinamento = await atualizarTreinamento(req.params.id, req.body);
    res.json(treinamento);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar treinamento', error: error.message });
  }
}

async function destroy(req, res) {
  try {
    await excluirTreinamento(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ message: 'Erro ao excluir treinamento', error: error.message });
  }
}

module.exports = { index, show, store, update, destroy };