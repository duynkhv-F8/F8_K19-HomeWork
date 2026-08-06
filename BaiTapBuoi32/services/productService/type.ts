import type {Product} from "../../modules/product/index.js";

export interface ProductServiceI {
    addProduct(product: Product): void

    updateProduct(id: string, data: Partial<Product>): void

    deleteProduct(id: string): void

    findById(id: string): Product | undefined

    findByName(keyword: string): Product[]

    getAllProducts(): Product[]

    printProducts(): void
}