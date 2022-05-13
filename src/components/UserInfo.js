export default class UserInfo {
    constructor ({profileName, profileEmployment}) {
        this._profileName = profileName;
        this._profileEmployment = profileEmployment;
    }

    getUserInfo = () => {
        this._userInfo = {}
        this._userInfo[this._profileName.id] = this._profileName.textContent;
        this._userInfo[this._profileEmployment.id] = this._profileEmployment.textContent;
        return this._userInfo;
    }

    setUserInfo = ({name, employment}) => {
        this._profileName.textContent = name;
        this._profileEmployment.textContent = employment;
    }
}