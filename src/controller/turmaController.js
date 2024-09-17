import * as db from "../repository/turmaRepository.js"

import { Router } from "express"
const endpoints = Router();

endpoints.post('/turma', async (req,resp) => {
    let turmaObj = req.body

    let idGerado = await db.adicionarTurma(turmaObj);
    
    resp.send({
        id: idGerado
    })
})

export default endpoints;