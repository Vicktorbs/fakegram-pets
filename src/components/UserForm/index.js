import React from 'react';
import { userInputValue } from '../../hooks/userInputValue';
import { SubmitButton } from '../SubmitButton';
import { Error, Form, Input, Title } from './styles';

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
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {error && <Error>{error}</Error>}
        </>
    )
}