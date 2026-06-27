export async function fetchCustomers() {
    try{
        const response = await fetch("http://localhost:3000/customers");
        return response.json();
    }catch (e){
        console.error('Có lỗi khi tải dữ liệu khách hàng', e)
        alert('Có lỗi khi tải dữ liệu khách hàng')
    }
}

export const createCustomer = async (customerData) => {
    try {
        const response = await fetch(`http://localhost:3000/customers`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerData)
        })
        return await response.json()
    } catch (e) {
        console.error('Có lỗi khi thêm khách hàng', e)
        alert('Có lỗi khi thêm khách hàng')
    }
}

export const updateCustomer = async (id, customerData) => {
    try {
        const response = await fetch(`http://localhost:3000/customers/${id}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(customerData)
        })
        return await response.json()
    } catch (e) {
        console.error('Có lỗi khi sửa khách hàng', e)
        alert('Có lỗi khi sửa khách hàng')
    }
}

export const deleteCustomer = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/customers/${id}`, {
            method: 'DELETE',
        })
        return await response.json()
    } catch (e) {
        console.error(e)
        alert('Không thể xóa khách hàng này')
    }
}