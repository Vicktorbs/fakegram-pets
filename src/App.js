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

const UserLogged = ({ children }) => {
    return children({ isAuth: true })
}

export const App = () => {

    // const urlParams = new window.URLSearchParams(window.location.search)
    // const detailId = urlParams.get('detail')
    return (
        <>
            <BrowserRouter>
                <GlobalStyle />
                <Logo />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/pet/:id' element={<Home />} />
                    <Route path='/detail/:detailId' element={<Detail />} />
                </Routes>
                <UserLogged>
                    {
                        ({ isAuth }) =>
                            isAuth
                                ? <Routes>
                                    <Route path='/favs' element={<Favs />} />
                                    <Route path='/user' element={<User />} />
                                    </Routes>
                                : <Routes>
                                    <Route path='/favs' element={<NotRegisterUser />} />
                                    <Route path='/user' element={<NotRegisterUser />} />
                                </Routes>
                    }
                </UserLogged>
                <Navbar />
            </BrowserRouter>
        </>
    )
}