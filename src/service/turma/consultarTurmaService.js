import { consultarTurma } from "../../repository/turmaRepository.js";

export default async function consultarTurmaService(){
        let registros = await  consultarTurma()
        return registros
}