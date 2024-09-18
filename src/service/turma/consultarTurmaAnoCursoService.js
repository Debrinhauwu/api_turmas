import { consultarTurmaPorAnoeCurso } from "../../repository/turmaRepository.js";

export default async function consultarTurmaPorAnoeCursoService(ano, curso) {
    let registros = await consultarTurmaPorAnoeCurso(ano, curso)

    return registros
}