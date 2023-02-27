import { Order } from "./components/Order"
import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Home from "./pages/Home"
import ProductPage from "./pages/ProductPage"
import { ADMIN_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, BASKET_ROUTE, HOME_ROUTE, PRODUCT_ROUTE, ORDER_ROUTE } from "./utilities/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        component: <Admin />
    },
    {
        path: BASKET_ROUTE,
        component: <Basket />
    },
    {
        path: ORDER_ROUTE,
        component: <Order />
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        component: <Home/>
    },
    {
        path: LOGIN_ROUTE,
        component: <Auth />
    },
    {
        path: REGISTER_ROUTE,
        component: <Auth />
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        component: <ProductPage />
    }
]