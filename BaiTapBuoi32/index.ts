import {ProductService} from "./services/productService/index.js";
import {CustomerService} from "./services/customerService/index.js";
import {OrderService} from "./services/orderService/index.js";
import {Product} from "./modules/product/index.js";
import {Customer} from "./modules/customer/index.js";
import {Order} from "./modules/order/index.js";

console.log('========== MÔ PHỎNG HỆ THỐNG ĐẶT HÀNG ==========')

// Khởi tạo các trình quản lí

const productService = new ProductService()
const customerService = new CustomerService()
const orderService = new OrderService(productService)

// Thêm sản phẩm

const iphone = new Product('Iphone', 30000000, 6)
const samsung = new Product('Samsung', 25000000, 3)
const airpods = new Product('Airpods', 2500000, 3)

console.log("\n----- Thêm sản phẩm -----");

productService.addProduct(iphone)
productService.addProduct(samsung)
productService.addProduct(airpods)

// in sản phẩm

productService.printProducts()

// Thêm khách hàng

const customer1 = new Customer('Duy', '123456', 'HN')

console.log("\n----- Thêm khách hàng -----")

customerService.addCustomer(customer1)

// in KH

customerService.printCustomers()

// Tạo đơn hàng

console.log("\n----- Khách tạo đơn hàng -----");

orderService.createOrder(customer1)
const order = orderService.getOrders()[0]

if (!order) {
    throw new Error("Không tìm thấy đơn hàng");
}

console.log(`Đơn hàng được tạo: ${order.id}`)

// Khách mua hàng

console.log("\n----- Thêm sản phẩm vào đơn -----");

orderService.addProduct(order.id, iphone.id, 2)
orderService.addProduct(order.id, airpods.id, 2)

order.printInvoice()

// Khách thay đổi đơn hàng

console.log("\n----- Khách bỏ AirPods -----");

orderService.removeProduct(order.id, airpods.id);

order.printInvoice();

// Thanh toán

console.log("\n----- Thanh toán -----");

orderService.checkout(order.id)

console.log(`Trạng thái: ${order.status}`);

console.log(`Khách hàng ${customer1.name} đã thanh toán thành công`);

// in đơn hàng

console.log("\n----- Danh sách đơn hàng -----");

orderService.printOrders();

// Tạo đơn 2

console.log("\n----- Khách khác mua hàng -----");

const customer2 = new Customer('Dương', '03112005', 'HN')

customerService.addCustomer(customer2)

orderService.createOrder(customer2)

const order2 = orderService.getOrders()[1]

if (!order2) {
    throw new Error("Không tìm thấy đơn hàng");
}

orderService.addProduct(order2.id, iphone.id, 1)
orderService.addProduct(order2.id, samsung.id, 1)

order2.printInvoice()

// Khách hủy đơn

console.log("\n----- Hủy đơn hàng thứ hai -----");

orderService.cancelOrder(order2.id);

console.log(`Trạng thái: ${order2.status}`);

console.log(`Khách hàng ${customer2.name} đã huỷ đơn`)





