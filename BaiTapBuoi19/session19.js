const products = [
    { id: 1, name: 'iPhone', price: 2000 },
    { id: 2, name: 'Samsung', price: 1500 },
    { id: 3, name: 'Xiaomi', price: 1000 },
    { id: 4, name: 'Oppo', price: 1200 }
]

const orders = [
    {
        id: 1,
        items: [
            { productId: 1, quantity: 2 },
            { productId: 2, quantity: 1 }
        ]
    },
    {
        id: 2,
        items: [
            { productId: 1, quantity: 1 },
            { productId: 3, quantity: 3 }
        ]
    },
    {
        id: 3,
        items: [
            { productId: 2, quantity: 2 },
            { productId: 4, quantity: 1 }
        ]
    }
]

function findMaxRevenueProduct(products, orders) {

    let productsMap = {}

    // Khoi tao map
    for (let pIdx = 0; pIdx < products.length; pIdx++) {

        const product = products[pIdx]

        product.totalRevenue = 0

        productsMap[product.id] = product
    }

    // Tinh doanh thu
    for (let oIdx = 0; oIdx < orders.length; oIdx++) {

        const order = orders[oIdx]

        for (let iIdx = 0; iIdx < order.items.length; iIdx++) {

            const item = order.items[iIdx]

            const product = productsMap[item.productId]

            if (product) {
                product.totalRevenue += product.price * item.quantity
            }
        }
    }

    // Tim san pham doanh thu lon nhat
    let maxProduct = products[0]

    for (let pIdx = 1; pIdx < products.length; pIdx++) {

        const product = products[pIdx]

        if (product.totalRevenue > maxProduct.totalRevenue) {
            maxProduct = product
        }
    }

    return maxProduct
}

const result = findMaxRevenueProduct(products, orders)

console.log(
    'Sản phẩm ' +
    result.name +
    ' có doanh thu lớn nhất, với doanh thu là: ' +
    result.totalRevenue
)