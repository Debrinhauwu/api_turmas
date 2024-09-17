import con from "./connection.js"

export async function adicionarTurma(turma) {
    let comando = `
    insert into tb_turma (nm_turma, ds_curso, nr_ano_letivo, qtd_capacidade, bt_ativo, dt_inclusao)
		    	values   (?, ?, ?, ?, ?, ?)
    `

   let resposta = await con.query(comando, [turma.turma, turma.curso, turma.ano, turma.capacidade, turma.ativo, turma.inclusao]);
   let info = resposta[0];

   let idTurma = info.insertId
   return idTurma;
}