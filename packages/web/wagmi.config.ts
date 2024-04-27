import deployLocalLatest from "@ponder-livequery/contracts/broadcast/Deploy.s.sol/31337/run-latest.json" assert {
	type: "json",
};
/** @type {import('@wagmi/cli').Config} */
import { defineConfig } from "@wagmi/cli";
import { actions, foundry, react } from "@wagmi/cli/plugins";
import * as chains from "wagmi/chains";

const deployItem = deployLocalLatest.transactions.find(
	// @ts-ignore
	(d: unknown) => d.contractName === "Todo",
);
export default defineConfig({
	out: "src/wagmi/generated.ts",
	plugins: [
		foundry({
			deployments: {
				Todo: {
					[chains.anvil.id]: deployItem?.contractAddress as `0x${string}`,
				},
			},
			project: "../contracts",
			include: ["**/Todo.json"],
		}),
		actions(),
		react(),
	],
});
