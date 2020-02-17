export class Restaurant {
    _id: String;
    name: String;
    address: String;
    capacity: Number;
    timeTable: String;

    constructor(_id = '', name = '', address = '', capacity = 0, timeTable = '') {
        this._id = _id;
        this.name = name;
        this.address = address;
        this.capacity = capacity;
        this.timeTable = timeTable;
    }

}
