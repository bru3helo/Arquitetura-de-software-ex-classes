import Aluno from "./Aluno";

class Turma extends Aluno {
  constructor(nome, login, RA, code, note) {
    super(nome, login, RA);
    this._code = code;
    this._note = note;
  }
  approved() {
    return this._note >= 6;
  }
}

export default Turma;