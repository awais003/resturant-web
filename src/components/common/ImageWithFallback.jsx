"use client";

import Image from "next/image";
import { useState } from "react";

export const ImageWithFallback = ({
  src,
  alt,
  fallback = "/placeholder.svg",
  ...props
}) => {
  const [error, setError] = useState(false);
  const imageSrc = error ? fallback : src;
  return (
    <Image
      src={imageSrc}
      alt={alt}
      onError={() => setError(true)}
      {...props}
    />
  );
};
