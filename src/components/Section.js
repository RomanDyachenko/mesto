export default class Section {
    constructor ({data, renderer}, containerSelector) {
        this._data = data;
        this._renderer = renderer;
        this._containerElement = document.querySelector(containerSelector);
    }


    addItem = (element) => { 
        this._containerElement.prepend(element);
    }

    renderItems = () => {
        
        this._data.forEach(item => {

        this._renderer(item);

        })
    }



   



}