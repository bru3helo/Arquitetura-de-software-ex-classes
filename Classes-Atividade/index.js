import Student from "./Modelos/Aluno";
import Class from "./Modelos/Turma";
import PresencialClass from "./Modelos/TurmaPresencial";
import http from 'http';

let student = new Student('Bruna', 'Bruna', '2525240');
let classStudent = new Class('Bruna', 'Bruna', '2525240', 'AS64B', '3');
let presencialClass = new PresencialClass('Bruna', 'Bruna', '2525240', 'AS64B', '3', '95');