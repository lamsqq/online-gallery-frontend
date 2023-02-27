import { makeAutoObservable } from 'mobx'

export default class PictureStore {
    constructor() {
        this._pictures = []
        makeAutoObservable(this)
    }
    setPictures(pictures) {
        this._pictures = pictures
    }
    get pictures() {
        return this._pictures
    }
}