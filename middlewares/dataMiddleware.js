const validateDataAtualizado = (request, response, next) => {
  const {body} = request;

  if (body.data_atualizado === undefined) {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" é obrigatório'});
  }

  if (body.data_atualizado === '') {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" não pode ser vazio'});
  }

  if (typeof body.data_atualizado !== 'string') {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" deve ser uma string'});
  }

  // Expressão regular para verificar o padrão YYYY-MM-DD HH:MM:SS
  const dateTimeRegex = /^\d{4}-\d{2}-\d{2}\s\d{2}:\d{2}:\d{2}$/;
  if (!dateTimeRegex.test(body.data_atualizado)) {
    return response.status(400)
        .json({message: 'O campo "data_atualizado" deve estar no formato YYYY-MM-DD HH:MM:SS'});
  }

  next();
};

module.exports = {validateDataAtualizado};
