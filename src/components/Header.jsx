import React, { useContext } from 'react'
import { AiOutlineTool, AiOutlineLogin, AiOutlineShoppingCart, AiOutlineLogout } 
from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { slide as Menu } from 'react-burger-menu'
import { ADMIN_ROUTE, BASKET_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utilities/consts'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
    const { user } = useContext(Context)
    const history = useNavigate()

    // const logOut = () => {
    //     user.setUser({})
    //     user.setIsUser({})
    //     user.setIsAuth(false)
    //     localStorage.removeItem('token')
    //     window.location.reload()
    // }

    return (
    <div className='header'>
        <Menu>
            <a className="menu-item" href={HOME_ROUTE}>Home</a>
            <a className="menu-item" href="/about">About</a>
            <a className="menu-item" href="/contact">Contact</a>
        </Menu>
        <ul className='header__menu'>
            <li>
                <RxHamburgerMenu className='icon'/>
            </li>
            <Link to="/online-gallery-react"><li>OnlineGallery</li></Link>
            {user.isAuth ?
            <li>
                {user.role === 'ADMIN' ?
                    <div>
                        <Link to={ADMIN_ROUTE}><AiOutlineTool className='icon'/></Link>
                        <span onClick={() => user.setUser({}) & user.setIsUser({}) & user.setIsAuth(false) & localStorage.removeItem('token') && window.location.reload() & history(HOME_ROUTE)}><AiOutlineLogout className='icon'/></span>
                    </div>
                :
                    <div>
                        <Link to={ADMIN_ROUTE}><AiOutlineTool className='icon'/></Link>
                        <span onClick={() => user.setUser({}) & user.setIsUser({}) & user.setIsAuth(false) & localStorage.removeItem('token') && window.location.reload() & history(HOME_ROUTE)}><AiOutlineLogout className='icon'/></span>
                    </div>
                }
            </li>
            :
            <li>
                <div>
                    <AiOutlineLogin className='icon' onClick={()=> history(LOGIN_ROUTE)}/>
                </div>
            </li>
            }
        </ul>
    </div>
    )
})

export default Header