import type {ProductServiceI} from "./type.js";
import type {Product} from "../../modules/product/index.js";

export class ProductService implements ProductServiceI {
    private products: Product[] = [];

    addProduct(product: Product): void {
        const existingProduct = this.findById(product.id)
        if (existingProduct) {
            throw new Error(`Product with id ${product.id} already exists`);
        }
        this.products.push(product);
    }

    updateProduct(id: string, data: Partial<Product>): void {
        const product = this.findById(id)
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        if (data.name !== undefined) {
            product.name = data.name
        }
        if (data.price !== undefined) {
            product.price = data.price
        }
    }

    deleteProduct(id: string): void {
        this.products = this.products.filter(product => product.id !== id)
    }

    findById(id: string): Product | undefined {
        return this.products.find(product => product.id === id)
    }

    findByName(keyword: string): Product[] {
        return this.products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));
    }

    getAllProducts(): Product[] {
        return [...this.products]
    }

    printProducts():void{
        console.log(`Product List:`)
        this.products.forEach(product => {
            console.log(product.toString())
        })
    }

}

