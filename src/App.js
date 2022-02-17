import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { GlobalStyle } from './GlobalStyle'

export const App = () => (
    <>
        <GlobalStyle />
        <ListOfCategories />
        <ListOfPhotoCards />
    </>
)