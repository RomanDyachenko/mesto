export default class UserInfo {
    constructor ({profileNameSelector, profileEmploymentSelector, profileAvatarSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileEmployment = document.querySelector(profileEmploymentSelector);
        this._profileAvatar = document.querySelector(profileAvatarSelector);
    }

    getUserInfo = () => {
        this._userInfo = {};
        this._userInfo[this._profileName.id] = this._profileName.textContent;
        this._userInfo[this._profileEmployment.id] = this._profileEmployment.textContent;
        return this._userInfo;
    }

    setUserInfo = ({name, about, avatar}) => {
        this._profileName.textContent = name;
        this._profileEmployment.textContent = about;
        this._profileAvatar.src = avatar;
        this._profileAvatar.alt = name;
    }
}