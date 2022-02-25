import React from 'react';
import { userInputValue } from '../../hooks/userInputValue';
import { Button, Form, Input, Title } from './styles';

export const UserForm = ({ onSubmit, title }) => {
    const email = userInputValue('')
    const password = userInputValue('')

    return (
        <>
            <Title>{title}</Title>
            <Form onSubmit={onSubmit}>
                <Input placeholder='Email' {...email} />
                <Input placeholder='Password' type='password' {...password} />
                <Button>{title}</Button>
            </Form>
        </>
    )
}