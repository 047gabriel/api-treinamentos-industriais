class Treinamento {
  constructor({ id, nome, descricao, instrutor_id, sala_id, data_inicio, data_fim }) {
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.instrutor_id = instrutor_id;
    this.sala_id = sala_id;
    this.data_inicio = data_inicio;
    this.data_fim = data_fim;
  }
}

module.exports = Treinamento;