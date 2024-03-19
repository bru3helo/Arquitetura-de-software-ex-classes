import Aluno from "./Aluno";
import Turma from "./Turma";
import TurmaPresencial from "./TurmaPresencial";

const aluno = new aluno('Bruna', 'Bruna', '2525240');
const turmaAluno = new turma('Bruna', 'Bruna', '2525240', 'AS64B', '3');
const turmaPresencial = new turmaPresencial('Bruna', 'Bruna', '2525240', 'AS64B', '3', '95');

http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'aplication/json');
    res.end(JSON.stringify({
        "Aluno": aluno,
        "Turma": turma,
        "TurmaPresencial": turmaPresencial,
        "Aprovado": turma.Aprovado(),
        "Frequencia": turmaPresencial.AprovadoFrequencia()
    }));
}).listen(5500, ()=>{
    console.log(" 5500 ");
});