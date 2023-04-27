const { response } = require('express');
const cardsModel = require('../models/cardsModel');

const getAll = async (req, res) => {
    const cards = await cardsModel.getAll();

    return res.status(200).json(cards);
};

const createNewCard = async (req, res) => {
    const createdCard = await cardsModel.createNewCard(req.body);

    return res.status(201).json(createdCard);


};

const deleteCard = async (req, res) => {
    const {id} = req.params;

    await cardsModel.deleteCard(id);
    return res.status(204).json();
};

const updateCard = async (req, res) => {
    const {id} = req.params;

    await cardsModel.updateCard(id, req.body);
    return res.status(204).json();
};

module.exports = {
    getAll,
    createNewCard,
    deleteCard,
    updateCard
}