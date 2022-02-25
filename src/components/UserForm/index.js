import React from 'react';
import { userInputValue } from '../../hooks/userInputValue';
import { Button, Error, Form, Input, Title } from './styles';

export const UserForm = ({onSubmit, title, error, disabled}) => {
    const email = userInputValue('')
    const password = userInputValue('')

    console.log(error);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            email: email.value,
            password: password.value
        })
    }
    return (
        <>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                <Title>{title}</Title>
                <Input disabled={disabled} placeholder='Email' {...email} />
                <Input disabled={disabled} placeholder='Password' type='Password' {...password} />
                <Button disabled={disabled}>{title}</Button>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    )
}