import { Server } from 'Socket.IO'

const SocketHandler = (req, res) => {
    const io = new Server(res.socket.server)


    io.on("connection", () => {
        console.log("sdkjcndscj")
        socket.emit('getMessage', "msg")
    });
    // socket.on("sendMessage", (msg) => {
    //   socket.emit('getMessage', msg)
    // });
  res.end()
}

export default SocketHandler