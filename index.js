const cors = require("cors");
const express = require("express");
const app = express();
app.use(cors());
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket
    .on("play", (arg) => {
      io.emit("play");
    })
    .on("pause", (arg) => {
      io.emit("pause");
    })
    .on("mute", (arg) => {
      io.emit("mute");
    })
    .on("un-mute", (arg) => {
      io.emit("un-mute");
    })
    .on("position", (arg) => {
      io.emit("position", arg);
    })
    .on("url", (arg) => {
      io.emit("url", arg);
    });
});

server.listen(3000, (error, data) => {
  if (error) {
    return console.log("messed up");
  }
  return console.log("nice working bao");
});
