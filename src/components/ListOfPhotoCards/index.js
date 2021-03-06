import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { PhotoCard } from '../PhotoCard';
import { ImgLoadingComponent } from '../PhotoCard/ImgLoading';
import { Ul } from './styles';

const withPhotos = gql`
    query getPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`

export const ListOfPhotoCards = ({ categoryId }) => {
    const { data, loading, error } = useQuery(withPhotos, { variables: { categoryId: categoryId } })  // destructuras la data y el estado de loading y error
    if (loading) return <ImgLoadingComponent /> // manejas el estado para que no te saque error mientras hace el fetch
    if (error) return <pre>{error.message}</pre>
    return (
        <Ul>
            {data.photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
        </Ul>
    )
}
// Componente de orden superior: funcion que recibe como parametro un componente y devuelve otro compoente con mejoras o props injectadas