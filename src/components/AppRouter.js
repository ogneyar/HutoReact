
import { Routes, Route } from 'react-router-dom'

import MainPage from '../pages/main/MainPage'
import ProductPage from '../pages/product/ProductPage'
import PromoPage from '../pages/promo/PromoPage'
import SupportPage from '../pages/support/SupportPage'
import LkPage from '../pages/lk/LkPage'


const AppRouter = () => {
    
    return (
        <Routes>
            <Route path={"/"} element={<MainPage/>} status={200} exact />
            <Route path={"/products"} element={<ProductPage/>} status={200} />
            <Route path={"/promo"} element={<PromoPage/>} status={200} />
            <Route path={"/support"} element={<SupportPage/>} status={200} />
            <Route path={"/lk"} element={<LkPage/>} status={200} />
        </Routes>
    )
}

export default AppRouter
