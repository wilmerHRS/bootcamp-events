import { Request, Response } from 'express';
import booksModel from '../models/books';

const getAll = async (req: Request, res: Response) => {
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

const create = async (req: Request, res: Response) => {
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

export {
  getAll,
  create
}