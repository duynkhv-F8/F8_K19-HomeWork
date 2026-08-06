import {v7} from "uuid";
export class Customer {
    private _id:string = v7().toString();
    constructor(
        private _name:string,
        private _phone:string,
        private _address:string,
    ) {}
    get id() {
        return this._id;
    }
    get name(){
        return this._name;
    }
    get phone(){
        return this._phone;
    }
    get address(){
        return this._address;
    }

    set name(name:string){
        this._name = name;
    }

    updatePhone(phone:string){
        this._phone = phone;
    }

    updateAddress(address:string){
        this._address = address;
    }

    toString(){
        return `Customer [id = ${this._id}, name=${this._name}, phone=${this._phone}, address=${this._address}]`
    }

}