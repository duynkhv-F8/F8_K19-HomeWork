import type {Customer} from "../../modules/customer/index.js";

export interface CustomerServiceI{
    addCustomer(customer: Customer): void

    updateCustomer(id:string, data: Partial<Customer>):void

    deleteCustomer(id:string):void

    findById(id:string):Customer | undefined

    findByPhone(phone:string):Customer | undefined

    getAllCustomers():Customer[]

    printCustomers():void
}