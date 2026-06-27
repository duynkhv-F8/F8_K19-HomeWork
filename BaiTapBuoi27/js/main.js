import {
    fetchCustomers,
    deleteCustomer
} from "./api/customerApi.js";

import {
    openPopupForm,
} from "./components/popupForm.js"

import {renderTable} from "./components/customerTable.js";

import {
    getCustomers,
    setCustomers
} from "./state/customerStore.js";

const tableContainer = document.querySelector('#main-table-container')
const addNewBtn = document.querySelector('.btn-add');

const refreshTable = () => {
    renderTable(tableContainer, getCustomers(), {
        onEdit: handleEdit,
        onDelete: handleDelete
    })
}

function handleEdit(customerId) {
    console.log(customerId)
    const customer = getCustomers().find(customer => customer.id === customerId)
    if (customer) {
        openPopupForm('edit', customer, async () => {
            setCustomers(await fetchCustomers());
            renderTable(tableContainer, getCustomers(), {
                onEdit: handleEdit,
                onDelete: handleDelete
            });
        })
    }
}

async function handleDelete(customerId) {
    await deleteCustomer(customerId);
    setCustomers(await fetchCustomers());
    refreshTable()
}

// mở popup bằng addnew
addNewBtn.addEventListener('click', () => {
    openPopupForm('add', null, async () => {
        setCustomers(await fetchCustomers());
        refreshTable()
    })
});

async function init() {
    setCustomers(await fetchCustomers());
    console.log(getCustomers());
    refreshTable();

}

init()


