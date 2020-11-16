import Room from '../models/Room';
import RoomRepository from '../repositories/RoomRepository';

class ShowRoomService {
  private roomRepository: RoomRepository;

  constructor(roomRepository: RoomRepository) {
    this.roomRepository = roomRepository;
  }

  public execute(id: string): Room {
    const room = this.roomRepository.findOne(id);

    if (!room) {
      throw new Error('Room not found');
    }

    return room;
  }
}

export default ShowRoomService;
