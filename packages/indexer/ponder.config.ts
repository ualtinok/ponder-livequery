import { todoAbi, todoAddress } from '@ponder-livequery/web/src/wagmi/generated';
import { createConfig } from '@ponder/core';
import { http } from 'viem';
export default createConfig({
    networks: {
        anvil: {
            chainId: 31337,
            transport: http(process.env.PONDER_RPC_URL_1),
        },
    },
    contracts: {
        Todo: {
            network: 'anvil',
            abi: todoAbi,
            address: todoAddress[31337],
            startBlock: 0,
        },
    },
});
