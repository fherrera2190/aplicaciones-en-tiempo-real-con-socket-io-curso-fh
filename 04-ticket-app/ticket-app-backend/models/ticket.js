const uuid = require("uuid");
class Ticket {
  constructor(number) {
    this.agent = null;
    this.desktop = null;
    this.id = uuid.v4();
    this.number = number;
  }
}

module.exports = Ticket;
