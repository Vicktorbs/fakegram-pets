import React from 'react';
import Contex from '../Contex';
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation';
import { LoginMutation } from '../containers/LoginMutation';

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

                                return <UserForm disabled={loading} error={errorMsg} title='Registrarse' onSubmit={onSubmit}/>
                            }
                        }
                    </RegisterMutation>

                    <LoginMutation>
                        {
                            (login, { data, loading, error }) => {
                                const onSubmit = ({ email, password }) => {
                                    const input = { email, password }
                                    const variables = { input }
                                    login({ variables }).then(activateAuth)
                                }
                                const errorMsg = error && 'Usuario no encontrado'

                                return <UserForm disabled={loading} error={errorMsg} title={'Iniciar sesion'} onSubmit={onSubmit} />
                            }
                        }
                    </LoginMutation>
                </>
            }
        }
    </Contex.Consumer>
)