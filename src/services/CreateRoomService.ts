import Room from '../models/Room';
import RoomRepository from '../repositories/RoomRepository';

class CreateRoomService {
  private roomRepository: RoomRepository;

  constructor(roomRepository: RoomRepository) {
    this.roomRepository = roomRepository;
  }

  public execute(name: string): Room {
    const room = this.roomRepository.create(name);

    return room;
  }
}

export default CreateRoomService;
