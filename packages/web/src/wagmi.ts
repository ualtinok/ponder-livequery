import { http, createConfig } from 'wagmi';
import { anvil } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
    chains: [anvil],
    connectors: [injected()],
    ssr: true,
    transports: {
        [anvil.id]: http(anvil.rpcUrls.default.http[0]),
    },
});

declare module 'wagmi' {
    interface Register {
        config: typeof config;
    }
}
