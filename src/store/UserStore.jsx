import { makeAutoObservable } from 'mobx'

export default class UserStore {
    constructor() {
        this._isUser = {}
        this._isAuth = false
        this._isRole = {}
        makeAutoObservable(this)
    }

    setIsUser(bool){
        this._isUser = bool
    }
    setIsAuth(bool) {
        this._isAuth = bool
    }
    setUser(user) {
        this._user = user
    }
    
    
    get isAuth() {
        return this._isAuth
    }
    get isUser(){
        return this._isUser
    }
    get isRole(){
        return this._isRole
    }
}