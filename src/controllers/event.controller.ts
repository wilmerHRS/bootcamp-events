import { Request, Response } from 'express';
import eventsModel from '../models/event';

const getAll = async (req: Request, res: Response) => {
  try {
    const events = await eventsModel.find().populate('book').exec();
    res.status(200).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    })
  }
}

const getSearch = async (req: Request, res: Response) => {
  try {
    const search = req.query.search;

    const events = await eventsModel
      .find()
      .populate({
        path: 'book',
        match: {
          $or: [
            { title: { $regex: `.*${search}.*`, $options: 'i' } },
            { code: { $regex: `.*${search}.*`, $options: 'i' } }
          ]
        }
      })
      .exec();

    const response = events.filter(event => event.book !== null);

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Ocurrio un error',
    })
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const { body } = req;
    const event = await eventsModel.create(body);
    res.status(201).json(event);

  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: 'Ocurrio un error',
    })
  }
}

export {
  getAll,
  getSearch,
  create
}