export class Reserve {
    public _id: String;
    public name_restaurant: String;
    public date: String;
    public time: String;

    constructor(_id='', name_restaurant='', date='', time=''){
        this._id = _id;
        this.name_restaurant = name_restaurant;
        this.date = date;
        this.time = time;
    }
}
