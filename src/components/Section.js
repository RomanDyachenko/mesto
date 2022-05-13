export default class Section {
    constructor ({data, renderer}, containerElement) {
        this._data = data;
        this._renderer = renderer;
        this._containerElement = containerElement;
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