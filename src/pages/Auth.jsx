import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Link, useNavigate } from 'react-router-dom'
import { login, register } from '../http/userAPI'
import { HOME_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE } from '../utilities/consts'
import { Context } from '../index'

const Auth = observer( () => {
  const {user} = useContext(Context)
  const location = useNavigate()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(login, password)
      } else {
        data = await register(login, password)
      }
      user.setUser(user)
      user.setIsAuth(true)
      history(HOME_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }  

  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='auth'>
          <form>
            <p>{isLogin ? 'Войти в аккаунт' : 'Регистрация'}</p>
            <input placeholder='Введите ваш логин' value={login} onChange={e => setLogin(e.target.value)}/>
            <input placeholder='Введите ваш парль' value={password} onChange={e => setPassword(e.target.value)} type='password'/>
    
            {isLogin ? 
              <div>Нет акккаунта? 
                <Link to={REGISTER_ROUTE}>Зарегистрироваться</Link>
              </div>
              :
              <div>Уже зарегистрированы?
                <Link to={LOGIN_ROUTE}>Войти</Link>
              </div>
            }
            <button onClick={click}>{isLogin ? 'Войти' : 'Зарегистроваться'}</button>
          </form>
        </div>
      </div>
    </div>
  )
})

export default Auth