import React from 'react';
import Helmet from 'react-helmet';
import { useParams } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

export const Home = () => {
    const { id } = useParams()
    return (
        <Layout title='Fakegram - Tu app de fotos de mascotas' subtitle='Con Fakegram puedes encontrar fotos de animales domesticos muy bonitos'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={id} />
        </Layout>
    )
}