const validateAge = (request, response, next) => {
  const {body} = request;
  if (body.idade == undefined || body.idade === '') {
    return response.status(400)
        .json({message: 'O campo "idade" é obrigatório'});
  }
  if (isNaN(parseInt(body.idade)) || parseInt(body.idade) < 0 ||
  parseInt(body.idade) > 130) {
    return response.status(400)
        .json({message: '"Idade" deve ser maior que 0 e no máximo 130'});
  }
  next();
};

module.exports = {validateAge};
