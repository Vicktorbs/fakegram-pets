import React from 'react'
import ReactDom from 'react-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink
} from '@apollo/client'
import { App } from './App'
import Context from './Contex'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'

const httpLink  = createHttpLink    ({
    uri: 'https://api-nine-gamma.vercel.app/graphql'
});

const authLink = setContext((_, { headers }) => { // get the authentication token from local storage if it exists
    const token = window.sessionStorage.getItem('token') // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    onError: onError(
        ({ networkError }) => {
            if (networkError && networkError.result.code === 'invalid_token') {
                window.sessionStorage.removeItem('token')
                window.location.href = '/'
            }
        }
    )
})


ReactDom.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('app')
)
