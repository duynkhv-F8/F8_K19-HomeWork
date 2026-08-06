import type {OrderServiceI} from "./type.js";
import {Order, OrderStatus} from "../../modules/order/index.js";
import type {Customer} from "../../modules/customer/index.js";
import type {ProductService} from "../productService/index.js";
import {OrderItem} from "../../modules/orderItem/index.js";

export class OrderService implements OrderServiceI  {
    private orders: Order[] = [];

    constructor(private productService:ProductService) {
    }

    createOrder(customer:Customer):void {
        const order = new Order(customer);
        this.orders.push(order);
    }

    addProduct(orderId:string, productId:string, quantity:number):void {
        const order = this.findOrder(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }
        const product = this.productService.findById(productId)
        if (!product) {
            throw new Error(`Product with id ${productId} not found`);
        }
        const orderItem = new OrderItem(product, quantity);
        order.addItem(orderItem);
    }

    removeProduct(orderId:string, productId:string):void {
        const order = this.findOrder(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }
        order.removeItem(productId);
    }

    checkout(orderId:string){
        const order = this.findOrder(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }
        if(order.status !== OrderStatus.NEW) throw new Error(`Order with id ${orderId} cannot be checkout`);
        order.status = OrderStatus.PAID
    }

    cancelOrder(orderId:string){
        const order = this.findOrder(orderId);
        if (!order) {
            throw new Error(`Order with id ${orderId} not found`);
        }
        if(order.status === OrderStatus.PAID){
            throw new Error(`Cannot cancel a paid order`);
        }
        order.status = OrderStatus.CANCELLED
    }

    findOrder(orderId:string): Order | undefined{
        return this.orders.find(order => order.id === orderId);
    }

    getOrders(){
        return [...this.orders];
    }

    printOrders(){
        console.log('Order List')
        this.orders.forEach(order => {
            console.log(`Order: ${order.id}, Status: ${order.status}`);
        })
    }
}