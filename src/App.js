import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './containers/PhotoCardWithQuery'
import { GlobalStyle } from './styles/GlobalStyle'

export const App = () => {

    const urlParams = new window.URLSearchParams(window.location.search)
    const detailId = urlParams.get('detail')
    console.log(detailId);
    return (
        <>
            <GlobalStyle />
            <Logo />
            {
                detailId
                    ? <PhotoCardWithQuery id={detailId} />
                    : <>
                        <ListOfCategories />
                        <ListOfPhotoCards categoryId={1} />
                    </>
            }
        </>
    )
}