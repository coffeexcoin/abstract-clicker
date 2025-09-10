import { abstractTestnet, abstract, type ChainEIP712 } from "viem/chains";
import { getGeneralPaymasterInput } from "viem/zksync";

// export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const IS_PRODUCTION = false; // force to testnet

const _chain = IS_PRODUCTION ? abstract : abstractTestnet;

export const chain: ChainEIP712 = {
  ..._chain,
  blockTime: 200,
}

export const API_URL = IS_PRODUCTION
  ? "https://api.mainnet.abs.xyz"
  : "https://api.testnet.abs.xyz";

export const paymasterFields = IS_PRODUCTION
  ? {}
  : {
      paymaster: "0x5407B5040dec3D339A9247f3654E59EEccbb6391" as `0x${string}`,
      paymasterInput: getGeneralPaymasterInput({
        innerInput: "0x",
      }),
    };
