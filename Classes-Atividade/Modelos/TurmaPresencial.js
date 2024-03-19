import Turma from "./Turma";

class TurmaPresencial extends Turma {
    constructor(nome, login, RA, code, note, frequence) {
        super(nome, login, RA, code, note);
        this._frequence =  frequence;    
    }
    approved() {
        return this._frequence >= 75;
    }
}

export default TurmaPresencial;