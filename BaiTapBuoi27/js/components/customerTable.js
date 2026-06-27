import { headers } from "../utils/constants.js";

// In thông tin khách hàng ra bảng
const renderTable = (tableContainer, customers, {onEdit, onDelete}) => {
    if (!customers || customers.length === 0) {
        tableContainer.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-muted);">Không có dữ liệu khách hàng.</div>`;
        return;
    }
    tableContainer.innerHTML = "";
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const tbody = document.createElement("tbody");
    tableContainer.append(table)
    table.appendChild(thead)
    thead.appendChild(tr)
    table.append(tbody)
    headers.forEach((header) => {
        const th = document.createElement("th");
        if (header.value === 'Email') return
        th.textContent = header.value;
        tr.appendChild(th)
    })
    const action = document.createElement("th");
    action.style = 'text-align: right;'
    action.textContent = 'Action';
    tr.appendChild(action)
    customers.forEach(customer => {
        const tr = document.createElement("tr");
        tr.dataset.id = customer.id
        headers.forEach((header) => {
            const td = document.createElement("td");
            td.textContent = customer[header.key];
            if (header.key === 'companyName') {
                td.textContent = '';

                const customerInfo = document.createElement('div');
                customerInfo.classList.add('customer-info');

                const customerNameSpan = document.createElement('span');
                customerNameSpan.classList.add('customer-name');
                customerNameSpan.textContent = customer.companyName;

                const customerEmailSpan = document.createElement('span');
                customerEmailSpan.classList.add('customer-email');
                customerEmailSpan.textContent = customer.email;

                customerInfo.append(customerNameSpan, customerEmailSpan);
                td.append(customerInfo)
            }
            if (header.key === 'email') {
                return
            }

            if(header.key === 'status') {
                td.textContent = '';
                const statusSpan = document.createElement("span");
                statusSpan.classList.add('badge','badge-active');
                statusSpan.textContent = customer[header.key];
                td.append(statusSpan);
            }
            tr.appendChild(td)
        })
        const actionC = document.createElement("td");
        actionC.classList.add('actions');
        actionC.style = 'text-align: right;'

        const editSpan = document.createElement("span");
        editSpan.classList.add('action-icon','edit-btn');
        editSpan.textContent = '✏️';
        editSpan.title = 'Edit';

        const deleteSpan = document.createElement("span");
        deleteSpan.classList.add('action-icon','delete-btn');
        deleteSpan.textContent = '🗑️';
        deleteSpan.title = 'Delete';
        tbody.appendChild(tr)

        tr.appendChild(actionC)
        actionC.append(editSpan, deleteSpan)
    })
// Cach 2
    // tableContainer.innerHTML = `
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th style="width: 80px;">ID</th>
    //                 <th>Customer</th>
    //                 <th>Phone</th>
    //                 <th>Address</th>
    //                 <th>Tax ID</th>
    //                 <th>Status</th>
    //                 <th style="text-align: right;">Action</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             ${customers.map(customer => `
    //                 <tr data-id="${customer.id}">
    //                     <td>${customer.id}</td>
    //                     <td>
    //                         <div class="customer-info">
    //                             <span class="customer-name">${customer.companyName}</span>
    //                             <span class="customer-email">${customer.email || 'N/A'}</span>
    //                         </div>
    //                     </td>
    //                     <td>${customer.phone || 'N/A'}</td>
    //                     <td>${customer.address || 'N/A'}</td>
    //                     <td>${customer.taxId || 'N/A'}</td>
    //                     <td>
    //                         <span class="badge badge-active">${customer.status}</span>
    //                     </td>
    //                     <td class="actions" style="text-align: right;">
    //                         <span class="action-icon edit-btn" title="Edit">✏️</span>
    //                         <span class="action-icon delete-btn" title="Delete">🗑️</span>
    //                     </td>
    //                 </tr>
    //             `).join('')}
    //         </tbody>
    //     </table>`
    setUpAction(onEdit, onDelete)
}
const setUpAction = (onEdit, onDelete) => {
    const editBtn = document.querySelectorAll('.edit-btn');
    editBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const row = e.target.closest('tr');
            const customerId = row.dataset.id;
            onEdit(customerId);
        })
    })
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const row = e.target.closest('tr');
            const customerId = row.dataset.id;
            const companyName = row.querySelector('.customer-name').textContent;
            if (confirm(`Bạn có chắc muốn xóa khách hàng của ${companyName} không?`)) {
                onDelete(customerId);
            }
        })
    })
}
export {renderTable}