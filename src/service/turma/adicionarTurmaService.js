import * as db from "../../repository/turmaRepository.js"
import { validarTurmaNova } from "../../validation/turma/turmaValidation.js";


export default async function adicionarTurmaService(turmaObj) {
    validarTurmaNova(turmaObj)
    
    let idGerado = await db.adicionarTurma(turmaObj);
    return idGerado
}