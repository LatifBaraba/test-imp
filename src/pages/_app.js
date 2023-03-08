import { store } from '@/store/index.'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
})

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
        </ChakraProvider>
    )
}
