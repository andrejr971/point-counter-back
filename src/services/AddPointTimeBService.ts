import Room from '../models/Room';
import RoomRepository from '../repositories/RoomRepository';

class AddPointTimeBService {
  private roomRepository: RoomRepository;

  constructor(roomRepository: RoomRepository) {
    this.roomRepository = roomRepository;
  }

  public execute(id: string): Room {
    const room = this.roomRepository.findOne(id);

    if (!room) {
      throw new Error('Room not found');
    }

    const { pointTimeB } = room;

    const countPoint = pointTimeB + 100;

    const newRoom = this.roomRepository.addPointB(id, countPoint);

    return newRoom;
  }
}

export default AddPointTimeBService;
