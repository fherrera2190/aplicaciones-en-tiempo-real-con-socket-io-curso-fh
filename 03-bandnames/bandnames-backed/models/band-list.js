const Band = require("./band");

class BandList {
  constructor() {
    this.bands = [
      new Band("Nirvana"),
      new Band("Metallica"),
      new Band("Heroes del Silencio"),
      new Band("Aerosmith"),
    ];
  }

  addBand(name) {
    this.bands.push(new Band(name));
    return this.bands;
  }

  removeBand(id) {
    this.bands = this.bands.filter((band) => band.id !== id);
  }

  getBands() {
    return this.bands;
  }

  increaseVotes(id) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.vote += 1;
      }
      return band;
    });
  }

  changeName(id, newName) {
    this.bands = this.bands.map((band) => {
      if (band.id === id) {
        band.name = newName;
      }
      return band;
    });
  }
}

module.exports = BandList;
