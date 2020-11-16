import Room from '../models/Room';
import RoomRepository from '../repositories/RoomRepository';

class AddPointTimeAService {
  private roomRepository: RoomRepository;

  constructor(roomRepository: RoomRepository) {
    this.roomRepository = roomRepository;
  }

  public execute(id: string): Room {
    const room = this.roomRepository.findOne(id);

    if (!room) {
      throw new Error('Room not found');
    }

    const { pointTimeA } = room;

    const countPoint = pointTimeA + 100;

    const newRoom = this.roomRepository.addPointA(id, countPoint);

    return newRoom;
  }
}

export default AddPointTimeAService;
