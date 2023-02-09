import { makeAutoObservable } from 'mobx'

export default class PictureStore {
    constructor() {
        this._authors = []
        this._categories = []
        this._pictures = []
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