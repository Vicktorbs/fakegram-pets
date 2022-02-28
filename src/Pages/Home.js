import React from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

const HomePage = () => {
    const { id } = useParams()
    return (
        <>
            <Helmet>
                <title>Fakegram - Tu app de fotos de mascotas</title>
                <meta name='description' content='Con Fakegram puedes encontrar fotos de animales domesticos muy bonitos' />
            </Helmet>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </>
    )
}

export const Home = React.memo(HomePage, (preProps, props) => {
    return preProps.id === props.id
})