import adicionarTurmaService from "../service/turma/adicionarTurmaService.js";
import alterarTurmaService from "../service/turma/alterarTurmaService.js";
import consultarTurmaService from "../service/turma/consultarTurmaService.js";
import { Router } from "express";
import deletarTurmaService from "../service/turma/deletarTurmaService.js";
import consultarTurmaPorAnoService from "../service/turma/consultarTurmaAnoService.js";
import consultarTurmaPorAnoeCursoService from "../service/turma/consultarTurmaAnoCursoService.js";
const endpoints = Router();

endpoints.post('/turma', async (req,resp) => {
    try {
        
    let turmaObj = req.body

    let idGerado = await adicionarTurmaService(turmaObj);
    
    resp.send({
        id: idGerado
    })

    } catch (err) {
    logErro(err)
     resp.status(400).send(criarErro(err))   
    }


})


endpoints.get('/turma', async (req, resp) => {
    try {
        let registros = await consultarTurmaService()

        resp.send(registros)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))  
    }
})

endpoints.get('/turma/busca/ano', async (req, resp) => {
    try {
        let ano = req.query.ano

        let registros = await consultarTurmaPorAnoService(ano)

        resp.send(registros)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))  
    }
})

endpoints.get('/turma/:ano/curso', async (req, resp) => {
    try {
        let ano = req.params.ano
        let curso = req.query.curso

        let registros = await consultarTurmaPorAnoeCursoService(ano, curso)

        resp.send(registros)

    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err))  
    }
})



endpoints.put('/turma/:id', async (req, resp) => {
    try {
        let id = req.params.id;
        let turmaObj = req.body;

        await alterarTurmaService(turmaObj, id);

        resp.status(204).send()
    } catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err)) 
    }
})

export default endpoints;

endpoints.delete('/turma/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        await deletarTurmaService(id)

        resp.status(204).send()


    }  catch (err) {
        logErro(err)
        resp.status(400).send(criarErro(err)) 
    }
})