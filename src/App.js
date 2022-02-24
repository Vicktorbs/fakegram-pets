import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'

import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { Detail } from './Pages/Detail'

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
            </BrowserRouter>
        </>
    )
}