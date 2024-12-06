const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const path = require("path");
const Sockets = require("./sockets");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;

    this.server = http.createServer(this.app, {
      cors: true,
    });

    this.io = socketio(this.server, {
      cors: {
        origin: "*",
      },
    });

    this.sockets = new Sockets(this.io);
  }

  middlewares() {
    this.app.use(express.static(path.resolve(__dirname, "../public")));
    this.app.use(cors());
    this.app.get("/last", (req, res) => {
      res.json({
        ok: true,
        last: this.sockets.ticketList.last3Numbers,
      });
    });
  }

  execute() {
    this.middlewares();
    this.server.listen(this.port, () => {
      console.log(`listening on ${this.port}`);
    });
  }
}

module.exports = Server;
