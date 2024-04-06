const validatePreco = (request, response, next) => {
  const {body} = request;

  if (body.preco === undefined) {
    return response.status(400)
        .json({message: 'O campo "preço" é obrigatório'});
  }

  // Verifica se o valor é um número
  if (typeof body.preco !== 'number') {
    return response.status(400)
        .json({message: 'O campo "preço" deve ser um número'});
  }

  next();
};

module.exports = {validatePreco};
