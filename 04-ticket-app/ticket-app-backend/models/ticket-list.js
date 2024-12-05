const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;
    this.pending = [];
    this.assigned = [];
  }

  get NextNumber() {
    this.lastNumber += 1;
    return this.lastNumber;
  }

  get last3Numbers() {
    return this.assigned.slice(0, 3);
  }

  createTicket() {
    const ticket = new Ticket(this.NextNumber);
    this.pending.push(ticket);
    return ticket;
  }

  assignTicket(agent, desk) {
    if (this.pending.length === 0) return null;

    const nextTicket = this.pending.shift();

    nextTicket.agent = agent;
    nextTicket.desktop = desk;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
