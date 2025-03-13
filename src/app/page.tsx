"use client";

import { Button } from "@/components/ui/button";
import { useFrameSDK } from "@/providers/FramesSDKProvider";
import { default as dynamicImport } from "next/dynamic";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";

const Map = dynamicImport(
  () => import("@/components/app/Map").then((mod) => mod.Map),
  {
    ssr: false,
  }
);

export const dynamic = "force-dynamic";

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { connector } = useFrameSDK();
  const { connect } = useConnect();
  const { isConnected } = useAccount();

  if (!mounted) return null;

  return (
    <div>
      {!isConnected && (
        <>
          <div className="text-muted font-display text-3xl uppercase mb-4">
            Enter the Gates
          </div>

          <div className="relative w-3/4 aspect-square mx-auto">
            <Image
              src="/gate-dark-purple.svg"
              alt="Gate"
              fill
              priority
              className="object-contain"
            />
          </div>
          <div className="mt-4 w-full px-4">
            <Button
              onClick={() => connect({ connector: connector })}
              className="w-full"
            >
              Reveal Realms
            </Button>
          </div>
        </>
      )}

      {isConnected && (
        <>
          <Map />
        </>
      )}
    </div>
  );
}
