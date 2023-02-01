// -------------------------------------------------------------- //
// ----------------------< Маршрутизация >----------------------- //
// -------------------------------------------------------------- //

import Router from 'express'
import GetController from "./GetController.js";
import auth from "./Guards.js";

const router = new Router()

//---------------------// отправка данных //---------------------//
router.get('/getAllSity', auth.isAuthenticated, GetController.getAllSity) // Получить всех городов
router.get('/getAllPogoda', auth.isAuthenticated, GetController.getAllPogoda) // получить всю погоду
router.get('/getSityPogoda/:sity', auth.isAuthenticated, GetController.getSityPogoda) // получить конкретную погоду

export default router;