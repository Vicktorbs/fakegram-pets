import React from 'react';
import { Layout } from '../components/Layout';
import { FavsWithQuery } from '../containers/GetFavorites';

export const Favs = () => {
    return <Layout title='Fakegram - Tus favoritos' subtitle='Aqui puedes encotnrar tus favoritos' >
        <FavsWithQuery />
    </Layout>
}