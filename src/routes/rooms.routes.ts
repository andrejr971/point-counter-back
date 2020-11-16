import { Router } from 'express';
import RoomRepository from '../repositories/RoomRepository';
import AddPointTimeAService from '../services/AddPointTimeAService';
import AddPointTimeBService from '../services/AddPointTimeBService';
import CreateRoomService from '../services/CreateRoomService';
import RemovePointTimeAService from '../services/RemovePointTimeAService';
import RemovePointTimeBService from '../services/RemovePointTimeBService';
import ShowRoomService from '../services/ShowRoomService';

const roomRepository = new RoomRepository();
const roomsRoutes = Router();

roomsRoutes.get('/', (request, response) => {
  const rooms = roomRepository.all();

  return response.json(rooms);
});

roomsRoutes.get('/:id', (request, response) => {
  const { id } = request.params;

  const showRoomService = new ShowRoomService(roomRepository);

  const room = showRoomService.execute(id);

  return response.json(room);
});

roomsRoutes.post('/', (request, response) => {
  const { name } = request.body;

  const createRoomService = new CreateRoomService(roomRepository);

  const room = createRoomService.execute(name);

  return response.json(room);
});

roomsRoutes.patch('/:id/point-a', (request, response) => {
  const { id } = request.params;

  const addPointTimeAService = new AddPointTimeAService(roomRepository);

  const room = addPointTimeAService.execute(id);

  return response.json(room);
});

roomsRoutes.patch('/:id/point-a/remove', (request, response) => {
  const { id } = request.params;

  const removePointTimeAService = new RemovePointTimeAService(roomRepository);

  const room = removePointTimeAService.execute(id);

  return response.json(room);
});

roomsRoutes.patch('/:id/point-b', (request, response) => {
  const { id } = request.params;

  const addPointTimeBService = new AddPointTimeBService(roomRepository);

  const room = addPointTimeBService.execute(id);

  return response.json(room);
});

roomsRoutes.patch('/:id/point-b/remove', (request, response) => {
  const { id } = request.params;

  const removePointTimeBService = new RemovePointTimeBService(roomRepository);

  const room = removePointTimeBService.execute(id);

  return response.json(room);
});

roomsRoutes.delete('/:id', (request, response) => {
  const { id } = request.params;

  roomRepository.delete(id);

  return response.send();
});

export default roomsRoutes;
