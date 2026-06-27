import {
    createCustomer,
    updateCustomer,
} from "../api/customerApi.js";

const inputToggle = document.createElement("input");
inputToggle.type = "checkbox";
inputToggle.id = "popup-toggle"

const popupOverlay = document.createElement('div')
popupOverlay.classList.add('popup-overlay');

document.body.append(inputToggle, popupOverlay);

// Hàm tạo các trường của Popup để tái sử dụng nếu Popup là product, v.v
const createFormGroup = (labelText, inputType, inputId, inputPlaceHolder, isFullWidth = false) => {
    const formGroup = document.createElement('div');
    formGroup.className = `form-group ${isFullWidth ? 'full-width' : ''}`;
    const label = document.createElement('label');
    label.classList.add('form-label');
    label.textContent = labelText

    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.classList.add('form-input');
    input.placeholder = inputPlaceHolder

    formGroup.append(label, input);
    return formGroup;
}

const buildPopUpDOM = () => {
    popupOverlay.innerHTML = ``
    // Nền đóng mở popup
    const popupBackdrop = document.createElement('label')
    popupBackdrop.classList.add('popup-backdrop')
    popupBackdrop.addEventListener('click', closePopupForm)
    // Khung panel trắng
    const popupContent = document.createElement('div')
    popupContent.classList.add('panel', 'popup-content')
    // Header Popup
    const panelHeader = document.createElement('div')
    panelHeader.classList.add('panel-header')
    panelHeader.style.cssText = 'border-bottom: none; padding-bottom: 0;';
    // Tiêu đề Popup
    const h2 = document.createElement('h2')
    h2.classList.add('panel-title')
    h2.id = 'popup-form-title';
    panelHeader.append(h2)
    // popup body
    const popupBody = document.createElement('div')
    popupBody.classList.add('popup-body')
    const popupGrid = document.createElement('div')
    popupGrid.classList.add('form-grid')
    // Tạo mảng để tái sử dụng nếu các trường trong popup là product hoặc v.vv
    const fieldsConfiguration = [
        {
            label: 'Company Name *',
            type: 'text',
            id: 'input-company-name',
            placeholder: 'e.g. Cty TNHH F8',
            fullWidth: true
        },
        {
            label: 'Email Address',
            type: 'email',
            id: 'input-email-address',
            placeholder: 'contact@example.com',
            fullWidth: false
        },
        {label: 'Phone Number', type: 'tel', id: 'input-phone-number', placeholder: '0987 654 321', fullWidth: false},
        {label: 'Tax ID (Mã số thuế)', type: 'text', id: 'input-tax-id', placeholder: '018381123412', fullWidth: true},
        {
            label: 'Physical Address',
            type: 'text',
            id: 'input-address',
            placeholder: 'Enter full address...',
            fullWidth: true
        }
    ];
    fieldsConfiguration.forEach(field => {
        const inputFormGroup = createFormGroup(field.label, field.type, field.id, field.placeholder, field.fullWidth);
        popupGrid.append(inputFormGroup);
    })
    popupBody.append(popupGrid)
    // popup footer
    const popupFooter = document.createElement('div')
    popupFooter.classList.add('popup-footer')

    const cancelButton = document.createElement('button')
    cancelButton.type = 'button'
    cancelButton.classList.add('btn', 'btn-cancel')
    cancelButton.textContent = 'Cancel'
    cancelButton.addEventListener('click', closePopupForm);

    const saveButton = document.createElement('button')
    saveButton.type = 'button'
    saveButton.classList.add('btn', 'btn-save')
    saveButton.textContent = 'Save Customer'

    popupFooter.append(cancelButton, saveButton)
    popupOverlay.append(popupBackdrop, popupContent)
    popupContent.append(panelHeader, popupBody, popupFooter)
}

// hàm đóng mở form
const openPopupForm = (mode = 'add', data = null,onSuccess) => {
    buildPopUpDOM()
    const titlePopup = document.querySelector('#popup-form-title')
    const saveBtn = document.querySelector('.btn.btn-save')

// hàm lấy dữ liệu input khi người dùng nhập giá trị vào
    function getFormData() {
        return {
            companyName: document.querySelector('#input-company-name').value.trim(),
            email: document.querySelector('#input-email-address').value.trim(),
            phone: document.querySelector('#input-phone-number').value.trim(),
            taxId: document.querySelector('#input-tax-id').value.trim(),
            address: document.querySelector('#input-address').value.trim(),
            status: data ? data.status : 'Active' // Giữ nguyên status cũ nếu sửa, mặc định Active nếu thêm mới
        };
    }

    if (mode === 'edit' && data) {
        titlePopup.textContent = 'Edit Customer Details'
        saveBtn.textContent = 'Update Customer'
        document.querySelector('#input-company-name').value = data.companyName;
        document.querySelector('#input-email-address').value = data.email || '';
        document.querySelector('#input-phone-number').value = data.phone || '';
        document.querySelector('#input-tax-id').value = data.taxId || '';
        document.querySelector('#input-address').value = data.address || '';
        saveBtn.addEventListener('click', async () => {
            const formData = getFormData()
            if (!formData.companyName) {
                alert('Vui lòng nhập tên công ty')
                return
            }
            closePopupForm()
            await updateCustomer(data.id, formData)
            if (onSuccess) await onSuccess()
        });
    } else {
        titlePopup.textContent = 'Add Customer Details'
        saveBtn.addEventListener('click', async () => {
            const formData = getFormData()
            if (!formData.companyName) {
                alert('Vui lòng nhập tên công ty')
                return
            }
            closePopupForm()
            await createCustomer(formData)
            if(onSuccess){
                await onSuccess()
            }
        });
    }
    inputToggle.checked = true;
}

function closePopupForm() {
    inputToggle.checked = false;
}

export {
    openPopupForm,
    closePopupForm
}