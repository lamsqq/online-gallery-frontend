import React, { useState, useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { useLocation, NavLink } from 'react-router-dom'
import { signup, register } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTER_ROUTE } from '../utilities/consts'
import { Context } from '../index'

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await signup(login, password);
      } else {
        data = await register(login, password);
      }
      user.setUser(data)
      user.setIsUser(data.id)
      user.setIsAuth(true)
    } catch (e) {
      console.log(e)
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
                <NavLink to={REGISTER_ROUTE}> Зарегистрироваться</NavLink>
              </div>
              :
              <div>Уже зарегистрированы?
                <NavLink to={LOGIN_ROUTE}> Войти</NavLink>
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