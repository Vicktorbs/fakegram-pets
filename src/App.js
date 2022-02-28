import React, { Suspense, useContext } from 'react'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'

import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Detail } from './Pages/Detail'
import { Navbar } from './components/Navbar'
// import { Favs } from './Pages/Favs'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { User } from './Pages/User'
import {Context} from './Contex'
import { Navigate } from 'react-router'
import { NotFound } from './Pages/NotFound'
const Favs = React.lazy(() => import ('./Pages/Favs'))

export const App = () => {
    const  urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    const { isAuth } = useContext(Context)
    return (
        <Suspense fallback={<div />}>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/pet/:id' element={<Home />} />
                        <Route exact path='/detail/:id' element={<Detail />} />
                        <Route exact path='/favs' element={isAuth ? <Favs /> : <Navigate replace to='/login' />}/>
                        <Route exact path='/user'  element={isAuth ? <User /> : <Navigate replace to='/login' />} />
                        <Route exact path='/login' element={!isAuth ? <NotRegisterUser /> : <Navigate replace to='/' />} />
                        <Route path='*' element={<NotFound />} />
                    </Routes>
                <Navbar />
            </BrowserRouter>
        </Suspense>
    )
}