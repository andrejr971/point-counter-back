import Room from '../models/Room';

class RoomRepository {
  private rooms: Room[];

  constructor() {
    this.rooms = [];
  }

  public all(): Room[] {
    return this.rooms;
  }

  public create(name: string): Room {
    const room = new Room({
      name,
      pointTimeA: 0,
      pointTimeB: 0,
    });

    this.rooms.push(room);

    return room;
  }

  public findOne(id: string): Room | undefined {
    return this.rooms.find(findRoom => findRoom.id === id);
  }

  public addPointA(id: string, value: number): Room {
    const findIndex = this.rooms.findIndex(findRoom => findRoom.id === id);

    this.rooms[findIndex].pointTimeA = value;

    return this.rooms[findIndex];
  }

  public removePointA(id: string, value: number): Room {
    const findIndex = this.rooms.findIndex(findRoom => findRoom.id === id);

    this.rooms[findIndex].pointTimeA = value;

    return this.rooms[findIndex];
  }

  public addPointB(id: string, value: number): Room {
    const findIndex = this.rooms.findIndex(findRoom => findRoom.id === id);

    this.rooms[findIndex].pointTimeB = value;

    return this.rooms[findIndex];
  }

  public removePointB(id: string, value: number): Room {
    const findIndex = this.rooms.findIndex(findRoom => findRoom.id === id);

    this.rooms[findIndex].pointTimeB = value;

    return this.rooms[findIndex];
  }

  public delete(id: string): void {
    const rooms = this.rooms.filter(room => room.id !== id);
    this.rooms = rooms;
  }
}

export default RoomRepository;
