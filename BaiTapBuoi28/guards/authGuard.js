import {getAccessToken} from "../utils/storage.js";

export const guardLogin = () => {
    if (getAccessToken()) {
        window.location.href = '../profile/profile.html'
    }
}
export const guardProfile = () => {
    if (!getAccessToken()) {
        window.location.href = '../login/login.html';
    }
}