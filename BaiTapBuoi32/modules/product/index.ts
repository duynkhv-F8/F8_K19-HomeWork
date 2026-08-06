import {v7} from "uuid";

export class Product {
    private _id: string = v7().toString();

    constructor(
        private _name: string,
        private _price: number,
        private _stock: number,
    ) {}

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get stock(){
        return this._stock;
    }

    set name(name: string){
        this._name = name;
    }

    set price(price: number){
        this._price = price;
    }

    set stock(stock: number){
        this._stock = stock;
    }

    increaseStock(quantity: number){
        if(quantity < 0){
            throw new Error("quantity cannot be negative");
        }
        this._stock += quantity;
    }

    decreaseStock(quantity: number){
        if(quantity < 0){
            throw new Error("quantity cannot be negative");
        }
        if(this._stock - quantity < 0){
            throw new Error("insufficient stock");
        }
        this._stock -= quantity;
    }

    toString(){
        return `Product [id = ${this._id}, name=${this._name}, price=${this._price}, stock=${this._stock}]`
    }

}