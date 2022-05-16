export default class UserInfo {
    constructor ({profileNameSelector, profileEmploymentSelector}) {
        this._profileName = document.querySelector(profileNameSelector);
        this._profileEmployment = document.querySelector(profileEmploymentSelector);
    }

    getUserInfo = () => {
        this._userInfo = {};
        this._userInfo[this._profileName.id] = this._profileName.textContent;
        this._userInfo[this._profileEmployment.id] = this._profileEmployment.textContent;
        return this._userInfo;
    }

    setUserInfo = ({name, employment}) => {
        this._profileName.textContent = name;
        this._profileEmployment.textContent = employment;
    }
}