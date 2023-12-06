const { request, response } = require('express');
const booksModel = require('../models/books');

const getAll = async (req = request, res = response) => {
  try {
    const events = await booksModel.find();
    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    })
  }
}

const create = async (req = request, res = response) => {
  try {
    const { body } = req;
    const event = await booksModel.create(body);
    res.status(201).json(event);

  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Datos mal enviados',
    })

  }
}

module.exports = {
  getAll,
  create
}