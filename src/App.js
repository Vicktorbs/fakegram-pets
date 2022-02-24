import React from 'react'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { Home } from './Pages/Home'
import { GlobalStyle } from './styles/GlobalStyle'

import { Route, Router, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

export const App = () => {

    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    return (
        <>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : (
                        <BrowserRouter>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/pet/:id' element={<Home />} />
                            </Routes>
                        </BrowserRouter>
                    )
            }
        </>
    )
}