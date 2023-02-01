// -------------------------------------------------------------- //
// --------------< Настройка и запуск веб-сервера >-------------- //
// -------------------------------------------------------------- //

import express from 'express';
import router from "./router.js";

const PORT = 5111;

const app = express()

app.use(express.json())
app.use(express.static('static'))

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS")
  res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With")
  next()
})

app.use('/api', router) // подключение маршуртизации сервера

async function startApp() {
    try {
        // Запуск сервера
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch (e) {
        console.log('Ошибка запуска сервера', e)
    }
}

app.get('/', function (req, res) {
    res.send('Сервер работает');
});

startApp()