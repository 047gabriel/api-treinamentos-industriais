class Instrutor {
  constructor({ id, nome, email, especialidade, ativo }) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.especialidade = especialidade;
    this.ativo = ativo;
  }
}

module.exports = Instrutor;