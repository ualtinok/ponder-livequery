import { theme } from '@/theme';
import { sseExchange } from '@ismeth/urql-sse-exchange';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';
import { Provider as UrqlProvider, cacheExchange, createClient as createUrqlClient, fetchExchange } from 'urql';
import { WagmiProvider } from 'wagmi';

import { config } from '@/wagmi';
import { ConnectKitProvider } from 'connectkit';

const urqlClient = createUrqlClient({
    url: process.env.NEXT_PUBLIC_GRAPHQL_URL as string,
    exchanges: [cacheExchange, sseExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <WagmiProvider config={config}>
            <UrqlProvider value={urqlClient}>
                <QueryClientProvider client={queryClient}>
                    <ConnectKitProvider>
                        <MantineProvider theme={theme}>
                            <Head>
                                <title>Ponder Livequery</title>
                                <meta
                                    name="viewport"
                                    content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                                />
                            </Head>
                            <Component {...pageProps} />
                        </MantineProvider>
                    </ConnectKitProvider>
                </QueryClientProvider>
            </UrqlProvider>
        </WagmiProvider>
    );
}
