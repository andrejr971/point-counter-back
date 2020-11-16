import Room from '../models/Room';
import RoomRepository from '../repositories/RoomRepository';

class RemovePointTimeAService {
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

    const countPoint = pointTimeA - 100;

    const newRoom = this.roomRepository.removePointA(id, countPoint);

    return newRoom;
  }
}

export default RemovePointTimeAService;
