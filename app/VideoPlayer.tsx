"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

type Props = {
  url: string;
};

export default function VideoPlayer({ url }: Props) {
  const [isMounted, handleMounted] = useState(false);

  useEffect(() => {
    handleMounted(true);
  }, []);

  return (
    <div>
      {isMounted && (
        <ReactPlayer
          controls
          light
          width="100%"
          playIcon={
            <Image
              src="/icons/play-icon.svg"
              width={89}
              height={89}
              alt="play icon"
            />
          }
          url={url}
        />
      )}
    </div>
  );
}
