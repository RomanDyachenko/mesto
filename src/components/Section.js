export default class Section {
    constructor ({renderer}, containerSelector) {
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
    }


    addItem = (element) => { 
        this._containerElement.prepend(element);
    }

    renderItems = (obj, data) => {
        
        obj.forEach(item => {

        this._renderer(item, data);

        })
    }



   



}