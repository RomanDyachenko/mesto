export default class Section {
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
    }


    addNewItem = (element) => { 
        this._containerElement.prepend(element);
    }

    addItems = (element) => {
        this._containerElement.append(element);
    }

    renderItems = (obj, data) => {
        
        obj.forEach(item => {

        this._renderer(item, data);

        })
    }



   



}