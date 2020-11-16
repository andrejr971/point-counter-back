import { Router } from 'express';
import roomsRoutes from './rooms.routes';

const routes = Router();

routes.use('/rooms', roomsRoutes);

export default routes;
