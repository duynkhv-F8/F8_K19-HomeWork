import {setTokens} from "../utils/storage.js";
import {guardLogin} from "../guards/authGuard.js";
import {loginAPI} from "../plugin/api.js";

guardLogin() // check điều kiện khi mới vào trang
const loginError = document.querySelector('#login-error');
document.querySelector('#app-container').addEventListener('submit',async (event) => {
    event.preventDefault()
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    username.replaceAll('<', '&lt').replaceAll('>', '&gt')
    password.replaceAll('>', '&gt').replaceAll('>', '&gt')
    const res = await loginAPI(username, password);
    const data = await res.json();
    console.log(data)
    if (res.ok) {
            setTokens(data.accessToken, data.refreshToken)
            window.location.href = '../profile/profile.html'
        } else loginError.style.display = 'block'
})