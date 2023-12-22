import { Request, Response } from 'express';
import dbMssql from '../config/mssql';
import { IWaitReservation } from '../interfaces/w-reservation.interface';


const getAll = async (req: Request, res: Response) => {
  try {
    const waitReservations = await dbMssql.TWaitReservations.findAll();

    const response: IWaitReservation[] = waitReservations.map(waitReservation => {
      return {
        idWaitReservation: waitReservation.idWaitReservation,
        idUser: waitReservation.idUser,
        idBook: waitReservation.idBook,
        userName: waitReservation.varUserName,
        bookName: waitReservation.varBookName,
        priority: waitReservation.varPriority,
        dateReservation: waitReservation.dtimeDateReservation,
        dateReservationEnd: waitReservation.dtimeDateReservationEnd,
        status: waitReservation.intStatus,
        isActive: waitReservation.bitIsActive,
        createdAt: waitReservation.dtimeCreatedAt
      }
    })

    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: 'Hable con el administrador',
    })
  }
}

export {
  getAll
}