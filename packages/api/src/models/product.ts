import { ObjectId } from "mongodb";
export default class Product {
    constructor(public name: string, public url: string,public id?: ObjectId) {
        this.id = id;
        this.name = name;
        this.url = url;
    }
}