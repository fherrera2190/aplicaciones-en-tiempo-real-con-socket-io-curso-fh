const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
    this.ticketList = new TicketList();
  }

  socketEvents() {
    this.io.on("connection", (socket) => {
      console.log("Cliente conectado");

      socket.on("new-ticket", (data, callback) => {
        console.log("creando nuevo ticket");
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });

      socket.on("next-ticket", ({ agent, desktop }, callback) => {
        console.log("creando nuevo ticket", agent, desktop);
        const assignedTicket = this.ticketList.assignTicket(agent, desktop);

        callback(assignedTicket);

        this.io.emit("ticket-assigned", this.ticketList.last3Numbers);
      });
    });
  }
}

module.exports = Sockets;
