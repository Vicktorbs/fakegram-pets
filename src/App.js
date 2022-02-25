import React from 'react'
import { Logo } from './components/Logo'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'

import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Detail } from './Pages/Detail'
import { Navbar } from './components/Navbar'
import { Favs } from './Pages/Favs'
import { NotRegisterUser } from './Pages/NotRegisterUser'
import { User } from './Pages/User'
import Context from './Contex'

export const App = () => {

    // const urlParams = new window.URLSearchParams(window.location.search)
    // const detailId = urlParams.get('detail')
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/pet/:id' element={<Home />} />
                    <Route path='/detail/:detailId' element={<Detail />} />
                </Routes>
                <Context.Consumer>
                    {
                        ({ isAuth }) =>
                            isAuth
                                ? <Routes>
                                    <Route exact path='/favs' element={<Favs />} />
                                    <Route path='/user' element={<User />} />
                                </Routes>
                                : <Routes>
                                    <Route path='/favs' element={<NotRegisterUser />} />
                                    <Route path='/user' element={<NotRegisterUser />} />
                                </Routes>
                    }
                </Context.Consumer>
                <Navbar />
            </BrowserRouter>
        </>
    )
}