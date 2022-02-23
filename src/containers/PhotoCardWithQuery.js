import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { useGetSinglePhoto } from '../hooks/useGetSinglePhoto';

export const PhotoCardWithQuery = ({ id }) => {
    const { loading, data, error } = useGetSinglePhoto(id)

    if (loading) return null
    if (error) return <h1>Error</h1>

    const { photo = {} } = data

    return <PhotoCard {...photo} />
}