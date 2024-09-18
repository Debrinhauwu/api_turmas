import con from "./connection.js";

export async function adicionarTurma(turma) {
  let comando = `
    insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
		    	values   (?, ?, ?, ?, ?, ?)
    `;

  let resposta = await con.query(comando, [
    turma.turma,
    turma.curso,
    turma.ano,
    turma.capacidade,
    turma.ativo,
    turma.inclusao
  ]);
  let info = resposta[0];

  let idTurma = info.insertId;
  return idTurma;
}

export async function consultarTurma() {
  let comando = `
           select nm_turma  turma,
                  ds_curso        curso,
                  nr_ano_letivo    anoLetivo,
                  qtd_capacidade   capacidade,
                  bt_ativo         situação,
                  dt_inclusao      inclusão
            from tb_turma; 
    `;

  let resposta = await con.query(comando);

  let registros = resposta[0];

  return registros;
}

export async function alterarTurma(turmaObj, id) {
  let comando = `
    update tb_turma
    set nm_turma = ?,
        ds_curso = ?,
        nr_ano_letivo = ?,
        qtd_capacidade = ?,
        bt_ativo = ?,
        dt_inclusao = ?
        where id_turma = ?
    `;

    let resposta = await con.query(comando, [  turmaObj.turma,
        turmaObj.curso,
        turmaObj.ano,
        turmaObj.capacidade,
        turmaObj.ativo,
        turmaObj.inclusao,
        id])

    let linhas = resposta[0]
    let info = linhas.affectedRows

    return info
}

export async function consultarTurmaPorAno(ano) {
    let comando = `
    select nm_turma  turma,
           ds_curso        curso,
           nr_ano_letivo    anoLetivo,
           qtd_capacidade   capacidade,
           bt_ativo         situação,
           dt_inclusao      inclusão
          from tb_turma
          where nr_ano_letivo = ?
`;

let resposta = await con.query(comando, [ano]);

let registros = resposta[0];

return registros;
}

export async function consultarTurmaPorAnoeCurso(ano, curso) {
    let comando = `
    select nm_turma  turma,
           ds_curso        curso,
           nr_ano_letivo    anoLetivo,
           qtd_capacidade   capacidade,
           bt_ativo         situação,
           dt_inclusao      inclusão
          from tb_turma
          where nr_ano_letivo = ? and ds_curso = ?
`;

let resposta = await con.query(comando, [ano, curso]);

let registros = resposta[0];

return registros;
}




export async function deletarTurma (id) {
    let comando = `
    delete 
    from tb_turma 
    where id_turma = ?;
    `

    let resposta = await con.query(comando, [id])

    let linhas = resposta[0].affectedRows

    return linhas
}