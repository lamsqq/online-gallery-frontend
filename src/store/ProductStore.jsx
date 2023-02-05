import { makeAutoObservable } from 'mobx'

export default class ProductStore {
    constructor() {
        this._authors = [
            {id: 1, name: 'Анастасия Колесниченко'},
            {id: 2, name: 'Виктор Цой'}
        ]
        this._categories = [
            {id: 1, name: 'Фотография'},
            {id: 2, name: 'Картина'}
        ]
        this._pictures = [
            {id: 1, name: 'Enjoy', price: 15000, size: '70 x 50', country: 'Россия', year: 2021, img: 'https://sample-art.com/wp-content/uploads/2021/11/kolesnichenko-naslazhdatsya-820x1024.jpg'},
            {id: 2, name: 'Enjoy', price: 15000, size: '70 x 50', country: 'Россия', year: 2021, img: 'https://sample-art.com/wp-content/uploads/2021/11/kolesnichenko-naslazhdatsya-820x1024.jpg'}
        ]
        makeAutoObservable(this)
    }

    setIsAuthors(authors) {
        this._authors = authors
    }
    setCategories(categories) {
        this._categories = categories
    }
    setPictures(pictures) {
        this._pictures = pictures
    }

    get authors() {
        return this._authors
    }
    get categories() {
        return this._categories
    }
    get pictures() {
        return this._pictures
    }
}