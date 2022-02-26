import React, { useContext } from 'react';
import { Context } from '../Contex';
import { SubmitButton } from '../components/SubmitButton'
export const User = () => {
    const { removeAuth } = useContext(Context)
    return <>
        <h1>Users</h1>
        <SubmitButton onClick={removeAuth} >Cerrar sesion</SubmitButton>
    </>
}