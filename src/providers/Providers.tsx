"use client";

import farcasterFrame from "@farcaster/frame-wagmi-connector";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createConfig, http, WagmiProvider } from "wagmi";
import { base, sepolia } from "wagmi/chains";

import { injected } from "wagmi/connectors";
import { FrameSDKProvider } from "./FramesSDKProvider";

export const config = createConfig({
  chains: [base, sepolia],
  transports: {
    // Configure dedicated RPC providers when using in production
    [base.id]: http(),
    [sepolia.id]: http(),
  },
  connectors: [farcasterFrame(), injected()],
});

const queryClient = new QueryClient();

function Providers({ children }: React.PropsWithChildren) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <FrameSDKProvider>{children}</FrameSDKProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export { Providers };
