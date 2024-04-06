const validateDataAtualizado = (request, response, next) => {
  const {body} = request;

  if (body.data_atualizado === undefined) {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" é obrigatório'});
  }

  // Verifica se o valor é uma string
  if (typeof body.data_atualizado !== 'string') {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" deve ser uma string'});
  }

  // Verifica se o valor pode ser convertido para uma data válida
  const dataAtualizado = new Date(body.data_atualizado);
  if (isNaN(dataAtualizado.getTime())) {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" deve ser uma data válida.'});
  }

  next();
};

module.exports = {validateDataAtualizado};
