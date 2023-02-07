import React, { useContext } from 'react'
import { AiOutlineHeart, AiOutlineTool, AiOutlineLogin, AiOutlineShoppingCart, AiOutlineLogout } 
from 'react-icons/ai'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { slide as Menu } from 'react-burger-menu'
import { ADMIN_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from '../utilities/consts'
import { observer } from 'mobx-react-lite'

const Header = observer(() => {
    const {user} = useContext(Context)
    const history = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        localStorage.removeItem('token')
        window.location.reload();
    }

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
                {user.isRole === 'ADMIN' ?
                    <div>
                        <Link to={ADMIN_ROUTE}><AiOutlineTool className='icon'/></Link>
                        <Link to={BASKET_ROUTE}><AiOutlineShoppingCart className='icon'/></Link>
                        <Link to={FAVORITE_ROUTE}><AiOutlineHeart className='icon'/></Link>
                        <span onClick={() => logOut}><AiOutlineLogout className='icon'/></span>
                    </div>
                :
                    <div>
                        <Link to={BASKET_ROUTE}><AiOutlineShoppingCart className='icon'/></Link>
                        <Link to={FAVORITE_ROUTE}><AiOutlineHeart className='icon'/></Link>
                        <span onClick={() => logOut}><AiOutlineLogout className='icon'/></span>
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