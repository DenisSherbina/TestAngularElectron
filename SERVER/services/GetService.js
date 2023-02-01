// -------------------------------------------------------------- //
// ----------< GET GET GET - сервис. Подготовка ответа >--------- //
// -------------------------------------------------------------- //
// import THIS_DATA from './all_info.json' assert { type: "json" }; // для версии ноды 17+
import * as fs from 'fs';

var THIS_DATA = JSON.parse(fs.readFileSync(process.cwd()+'\\SERVER\\services\\all_info.json', 'utf8'))

class GetService {

    getAllSity() {
        try {
            // Вернём города
            return THIS_DATA.map( all => { return all.sity } )

        } catch (e) {
            console.log('Ошибка: ', e)
        }
    }

    getAllPogoda(){
        return THIS_DATA
    }

    getSityPogoda(sity) {
        try {
            // Вернём температуру для конкретного города
            return THIS_DATA.filter( all => { return all.sity == sity })[0]

        } catch (e) {
            console.log('Ошибка: ', e)
        }
    }

}

export default new GetService();