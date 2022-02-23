import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => (
    <>
        <GlobalStyle />
        <Logo />
        <ListOfCategories />
        <ListOfPhotoCards categoryId={1} />
    </>
)