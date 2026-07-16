import type { Customer } from "../entities/Customer.js";
import uuid from "../utils/uuid.js";

export class CustomerService {
    private customers: Customer[] = [];

    create(customer: Omit<Customer, "id">): Customer {
        const newCustomer: Customer = {
            id: uuid(),
            ...customer,
        };

        this.customers.push(newCustomer);

        return newCustomer;
    }

    updateById(
        id: string,
        data: Partial<Omit<Customer, "id">>
    ): Customer | null {
        const customer = this.customers.find(
            (customer) => customer.id === id
        );

        if (!customer) {
            return null;
        }

        Object.assign(customer, data);

        return customer;
    }
}