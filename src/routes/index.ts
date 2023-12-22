import { Router } from 'express';
import eventRoute from './event.routes';
import bookRoute from './book.routes';
import wReservationRoute from './w-reservation.routes';

const routes = Router();

routes.use("/events", eventRoute);
routes.use("/books", bookRoute);
routes.use("/wait-reservation", wReservationRoute);

export { routes };