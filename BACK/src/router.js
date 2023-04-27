const express = require('express');
const cardsController = require('./controllers/cardsController');
const cardsMiddleware = require('./middlewares/cardsMiddleware');

const router = express.Router();

//router.post('/login', loginController.login)
router.get('/cards', cardsController.getAll);
router.post('/cards', cardsMiddleware.validateBody, cardsController.createNewCard);
router.delete('/cards/:id', cardsController.deleteCard);
router.put('/cards/:id', cardsController.updateCard);


module.exports = router;