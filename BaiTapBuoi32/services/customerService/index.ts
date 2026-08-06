import {Customer} from "../../modules/customer/index.js";
import type {CustomerServiceI} from "./type.js";

export class CustomerService implements CustomerServiceI{
    private customers:Customer[] = []
    addCustomer(customer:Customer){
        const existingCustomer = this.findById(customer.id)
        if(existingCustomer){
            throw new Error(`Customer with id ${customer.id} already exists`);
        }
        this.customers.push(customer);
    }

    updateCustomer(id:string, data: Partial<Customer>):void{
        const customer = this.findById(id);
        if(!customer){
            throw new Error(`Customer with id ${id} not found`);
        }
        if (data.name !== undefined){
            customer.name = data.name
        }
        if (data.phone !== undefined){
            customer.updatePhone(data.phone)
        }
        if (data.address !== undefined){
            customer.updateAddress(data.address)
        }
    }

    deleteCustomer(id:string):void{
         this.customers = this.customers.filter(customer => customer.id !== id);
    }

    findById(id:string):Customer | undefined{
        return this.customers.find(customer => customer.id === id);
    }

    findByPhone(phone:string):Customer | undefined{
        return this.customers.find(customer => customer.phone === phone);
    }

    getAllCustomers():Customer[]{
        return [...this.customers]
    }

    printCustomers():void{
        console.log(`Customers List: `)
        this.customers.forEach(customer => {
            console.log(customer.toString());
        })
    }
}