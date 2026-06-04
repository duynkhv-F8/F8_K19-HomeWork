const data = {
    meta: {
        invoiceNo: "WM-20260521-0001",
        saleDate: "2026/05/21",
        currency: "VND",
        paymentMethod: "Cash"
    },

    seller: {
        name: "WinMark 2 Ba Trung",
        address: "2 Ba Trung - HN",
        phone: "012345678",
        representative: "Đại diện WinMark"
    },

    customer: {
        name: "Nguyen Van A",
        age: 20,
        address: "Ha Dong Ha Noi"
    },

    items: [
        {
            no: 1,
            name: "Ao Thun",
            size: "XL",
            quantity: 1,
            price: 200000
        },
        {
            no: 2,
            name: "Ao Thun",
            size: "XL",
            quantity: 1,
            price: 200000
        }
    ],

    promotion: {
        description: "Khuyen mai 50% chi KH than thiet",
        discountPercent: 50
    }
};
function calculateTotal(items) {
    let total = 0;
    for (const item of items) {
        total += item.quantity * item.price;
    }
    return total;
}
function calculateDiscount(total, discount) {
    return total * discount / 100;
}
function formatMoney(amount) {
    return Number(amount).toLocaleString('en-US') + ' đ';
}
// function renderProducts(items) {
//     let rowsHtml = "";
//     const productList = document.getElementById('product-list')
//     for (const item of items) {
//         rowsHtml += `
//             <tr>
//             <td>${item.no}</td>
//             <td>${item.name}</td>
//             <td>${item.size}</td>
//             <td>${item.quantity}</td>
//             <td>${formatMoney(item.price)}</td>
//             <td>${formatMoney(item.quantity * item.price)}</td>
// </tr>
//         `;
//     }
//     productList.innerHTML = rowsHtml;
// }
const renderProducts = (items) => {
    const productList = document.getElementById('product-list');
    items.forEach((item) => {
        const trElement = document.createElement('tr');
        const keys = Object.keys(item);
        keys.forEach((key) => {
            const tdElement = document.createElement('td');
            tdElement.textContent = (key === 'price') ? formatMoney(item[key]) : item[key];
            trElement.append(tdElement);
        })
        const colTotalElement = document.createElement('td');
        const colTotal = item.price * item.quantity
        colTotalElement.textContent = formatMoney(colTotal);
        trElement.append(colTotalElement)
        productList.append(trElement);
    })
}
function renderInvoice(data) {
    //Invoice-No
    document.getElementById('invoice-no').innerText = data.meta.invoiceNo;
    //Sale-Date
    document.getElementById('sale-date').innerText = data.meta.saleDate;
    //Seller Address
    document.getElementById('seller-address').innerText = data.seller.address;
    //Seller Phone
    document.getElementById('seller-phone').innerText = data.seller.phone;
    //Customer Age
    document.getElementById('customer-age').innerText = data.customer.age;
    //Product List
    renderProducts(data.items)
    const subTotal = calculateTotal(data.items);
    const discountTotal = calculateDiscount(subTotal, data.promotion.discountPercent);
    const finalTotal = subTotal - discountTotal;
    document.getElementById('subtotal').innerText = formatMoney(subTotal);
    document.getElementById('discount').innerText = "- " + formatMoney(discountTotal);
    document.getElementById('final-total').innerText = formatMoney(finalTotal);

}
renderInvoice(data)
