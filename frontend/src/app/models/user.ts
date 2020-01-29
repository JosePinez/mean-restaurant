export class User {
    _id: String;
    name: String;
    dni: String;
    email: String;
    tel: String;
    admin: Boolean;

    constructor(_id='', name='', dni='', email='', tel='',admin=false){
        this._id = _id;
        this.name = name;
        this.dni = dni;
        this.email = email;
        this.tel = tel;
        this.admin = admin;
    }
}
