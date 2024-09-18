import { deletarTurma } from "../../repository/turmaRepository.js";

export default async function deletarTurmaService(id){
     let linhasAfetadas = await deletarTurma(id)

     if(linhasAfetadas == 0)
        throw new Error (' NAO ACHOU O FILME ')
}