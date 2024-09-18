import { alterarTurma } from "../../repository/turmaRepository.js";
import { validarTurmaNova } from "../../validation/turma/turmaValidation.js";

export default async function alterarTurmaService(turmaObj, id) {
    validarTurmaNova(turmaObj, id)

    let linhasAfetadas =  await alterarTurma(turmaObj, id)

    if (linhasAfetadas == 0) 
        throw new Error ('Nenhuma linha afetada')
}