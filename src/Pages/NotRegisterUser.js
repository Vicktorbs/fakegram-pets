import React from 'react';
import Contex from '../Contex';
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation';

export const NotRegisterUser = () => (
    <Contex.Consumer>
        {
            ({ activateAuth }) => {
                return <>
                    <RegisterMutation>
                        {
                            (register, { data, loading, error }) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password }
                                    const variables = { input }
                                    register({ variables }).then(activateAuth)
                                }
                                const errorMsg = error && 'User already exists.'

                                return <UserForm disabled={loading} error={errorMsg} title='Log In' onSubmit={onSubmit}/>
                            }
                        }
                    </RegisterMutation>
                    <UserForm title={'Iniciar sesion'} onSubmit={activateAuth} />
                </>
            }
        }
    </Contex.Consumer>
)