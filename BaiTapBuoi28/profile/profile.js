import {guardProfile} from "../guards/authGuard.js";
import {getProfileAPI,refreshTokenAPI} from "../plugin/api.js";

guardProfile() //Nếu chưa có Token đá về trang login, tránh việc user ko có token nhưng vẫn truy cập được profile vì nhớ đường dẫn
window.addEventListener('pageshow', guardProfile)// Phòng chống việc nhấn Back cx có thể quay lại xem Profile nếu vừa mới logout và đang đứng ở login
const profileInfo = document.getElementById('profile-info')

async function renderProfile() {
    // Xử lí khi Token hết hạn
    const response = await getProfileAPI()
    const data = await response.json();
    console.log(data)
    if (data.message === 'Token Expired!') {
        console.warn("accessToken hết hạn! Đang gọi refresh token lấy lại!")
        profileInfo.innerHTML = 'Token hết hạn. Đang lấy lại token mới';
        const isRefreshed = await refreshTokenAPI()
        if (isRefreshed) {
            return getProfileAPI();
        } else {
            //Nếu refresh token cx hết hạn, bắt đăng nhập lại
            alert("Phiên đăng nhập hết hạn, vui lòng login lại!");
            logout();
            return;
        }
    }
    if (response.ok) {
        profileInfo.innerHTML = ` <strong>Tên:</strong> ${data.firstName} ${data.lastName} <br>
             <strong>Email:</strong> ${data.email} <br>
             <strong>Giới tính:</strong> ${data.gender}`;
    }
}

const logout = () => {
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    window.location.href = '../login/login.html'
}
document.getElementById('btn-reload-profile').addEventListener('click', renderProfile)
document.getElementById('btn-logout').addEventListener('click', logout)
renderProfile()