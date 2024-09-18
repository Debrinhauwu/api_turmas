import { consultarTurmaPorAno } from "../../repository/turmaRepository.js";

export default async function consultarTurmaPorAnoService(ano){
    let registros = consultarTurmaPorAno(ano)
   
    if (registros.length === 0) {
        // Lança um erro personalizado se nenhum registro for encontrado
        throw new Error('Nenhuma turma encontrada para o ano especificado.');
    }

    return registros

}