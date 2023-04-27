const validateBody = (req, res, next) => {
    const {body} = req;

    if (body.titulo === undefined) {
        return res.status(400).json({msg:'titulo é obrigatório'});
    }
    if (body.titulo === '') {
        return res.status(400).json({msg:'titulo é obrigatório'});
    }
    if (body.conteudo === undefined) {
        return res.status(400).json({msg:'conteudo é obrigatório'});
    }
    if (body.conteudo === '') {
        return res.status(400).json({msg:'conteudo é obrigatório'});
    }
    if (body.list === undefined) {
        return res.status(400).json({msg:'lista é obrigatório'});
    }
    if (body.list === '') {
        return res.status(400).json({msg:'lista é obrigatório'});
    }

    next();
};

module.exports = {
    validateBody,
};