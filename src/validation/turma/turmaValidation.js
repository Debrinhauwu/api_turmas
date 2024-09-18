

export function validarTurmaNova(turmaObj) {
    if(!turmaObj.turma)
        throw new Error('Faltou o nome da turma')
    if(!turmaObj.curso)
        throw new Error('Faltou o nome da curso')
    if(!turmaObj.ano)
        throw new Error('Faltou o ano')
    if(!turmaObj.capacidade)
        throw new Error('Faltou a capacidade')
    if(turmaObj.ativo == undefined )
        throw new Error('Faltou a situação')
    if(!turmaObj.inclusao)
        throw new Error('Faltou oa inclusao')
}

