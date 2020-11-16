import express from 'express';
import http from 'http';
import cors from 'cors';
import SocketIo, { Server, Socket } from 'socket.io';
import routes from './routes';

const app = express();
const server = http.createServer(app);
// @ts-ignore
const io: Server = SocketIo(server);

app.use(cors());
app.use(express.json());
app.use('/api/v1/', routes);

interface ISocketData {
  id: string;
  time: string;
}

interface IActive {
  id: string;
  active: boolean;
}

const active: IActive[] = [];

io.on('connection', (socket: Socket) => {
  socket.on('choose-room', (id: string) => {
    socket.join(id);

    active.push({
      id,
      active: false,
    });
  });

  socket.on('press-button', ({ id, time }: ISocketData) => {
    socket.to(id).broadcast.emit('blocked', true);

    const findIndex = active.findIndex(room => room.id === id);

    if (!active[findIndex].active) {
      socket.to(id).broadcast.emit('time-press', {
        name: time,
        visible: true,
      });
    }

    active[findIndex].active = true;
  });

  socket.on('active', (id: string) => {
    const findIndex = active.findIndex(room => room.id === id);
    active[findIndex].active = false;
  });
});

server.listen(3334, () => {
  console.log('🚀 Server started port on port 3334');
});
