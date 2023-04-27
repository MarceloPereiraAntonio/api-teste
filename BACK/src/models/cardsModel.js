const connect = require('./connection');


const getAll = async () => {
    const cards = await connect.execute('SELECT * FROM cards');
    return cards[0];
};

const createNewCard = async (card) => {
    const {titulo, conteudo, list} = card;

    const createdCard = await connect.execute('INSERT INTO cards(titulo, conteudo, list) VALUES(?, ?, ?)', [titulo, conteudo, list]);

    return {insertId: createdCard[0].insertId};
};

const deleteCard = async (id) => {
    const removeCard = await connect.execute('DELETE FROM cards WHERE id = ?', [id]);
    return removeCard[0];
};


const updateCard = async (id, card) => {
    const {titulo, conteudo, list} = card;
    const updateCard = await connect.execute('UPDATE cards SET titulo = ?, conteudo= ?, list=?  WHERE id = ?', [titulo, conteudo, list, id]);
    return updateCard[0];
};

module.exports = {
    getAll,
    createNewCard,
    deleteCard,
    updateCard
};