const API_URL = 'https://dummyjson.com';
export async function loginAPI(username, password) {
    try {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: username,
                password: password,
                expiresInMins: 1
            })
        })
        return res
    } catch (error) {
        console.error("Lỗi đăng nhập:", error);
    }
}

export async function getProfileAPI() {
try {
        const accessToken = localStorage.getItem('accessToken');
        const response = await fetch(`${API_URL}/auth/me`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`, // Pass JWT via Authorization header
            }
        })
        return response;

    } catch (e) {
        console.error('Lỗi API Profile', e);
    }
}
export async function refreshTokenAPI() {
    const refreshToken = localStorage.getItem('refreshToken')
    if (!refreshToken) return false
    try {
        const response = await fetch(`${API_URL}/auth/refresh`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                refreshToken: refreshToken, // Optional, if not provided, the server will use the cookie
                expiresInMins: 1 // optional (FOR ACCESS TOKEN), defaults to 60
            })
        })
        const newData = await response.json();
        if (response.ok) {
            localStorage.setItem('accessToken', newData.accessToken)
            localStorage.setItem('refreshToken', newData.refreshToken)
            console.log("✅ Đổi token mới thành công! Đã lưu vào storage.");
            return true
        } else return false;
    } catch (e) {
        return false
    }
}

