import { v4 as uuid } from 'uuid';

class Room {
  id: string;

  name: string;

  pointTimeA: number;

  pointTimeB: number;

  constructor({ name, pointTimeA, pointTimeB }: Omit<Room, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.pointTimeA = pointTimeA;
    this.pointTimeB = pointTimeB;
  }
}

export default Room;
