const uuid = require('uuid');

class Band{
    constructor(name){
        this.name =name;
        this.id = uuid.v4();
        this.vote = 0;
    }
}

module.exports = Band;