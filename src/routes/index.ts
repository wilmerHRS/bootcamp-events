import { Router } from 'express';
import eventRoute from './event.routes';
import bookRoute from './book.routes';

const routes = Router();

routes.use("/events", eventRoute);
routes.use("/books", bookRoute);

export { routes };