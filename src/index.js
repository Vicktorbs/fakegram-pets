import React from 'react'
import ReactDom from 'react-dom'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client'
import { App } from './App'
import Context from './Contex'

const client = new ApolloClient({
    uri: 'https://petagram-vicktorbs-et23d8awc-vicktorbs.vercel.app/graphql',
    cache: new InMemoryCache()
})


ReactDom.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('app')
)
