import { gql, useMutation } from '@apollo/client';
import { Mutation } from '@apollo/client/react/components';
import React from 'react';

const LIKE_PHOTO = gql`
mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
        id,
        liked,
        likes
    }
}
`

export const ToggleLikeMutation = ({ children }) => {
    return <Mutation mutation={LIKE_PHOTO}>
        {children}
    </Mutation>
}