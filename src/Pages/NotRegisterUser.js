import React from 'react';
import Contex from '../Contex';
import { UserForm } from '../components/UserForm'

export const NotRegisterUser = () => (
    <Contex.Consumer>
        {
            ({ activateAuth }) => {
                return <>
                    <UserForm title={'Registrarme'} onSubmit={activateAuth} />
                    <UserForm title={'Iniciar sesion'} onSubmit={activateAuth} />
                </>
            }
        }
    </Contex.Consumer>
)