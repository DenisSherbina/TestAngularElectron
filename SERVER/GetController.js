// -------------------------------------------------------------- //
// --------< GET GET GET - контроллер. Обработка запроса >------- //
// -------------------------------------------------------------- //

import GetService from "./services/GetService.js";

class GetController {
    
    async getAllSity(req, res) {
        try {
            console.log('Получение всех городов')
            const post = await GetService.getAllSity()
            res.json(post)
        } catch (e) {
            console.log('\nERROR /getAllSity: ', e, '\n')
            res.status(500).json(e)
        }
    }

    async getAllPogoda(req, res) {
        try {
            console.log('Получение всей погоды')
            const post = await GetService.getAllPogoda()
            res.json(post)
        } catch (e) {
            console.log('\nERROR /getAllPogoda: ', e, '\n')
            res.status(500).json(e)
        }
    }

    async getSityPogoda(req, res) {
        try {
            console.log('Получение погоды для города: ')
            const post = await GetService.getSityPogoda(req.params.sity)
            res.json(post)
        } catch (e) {
            console.log('\nERROR /getSityPogoda: ', e, '\n')
            res.status(500).json(e)
        }
    }

}

export default new GetController();