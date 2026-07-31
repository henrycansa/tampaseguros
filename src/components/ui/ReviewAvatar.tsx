"use client";

import { useState } from "react";

function getInitials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export function ReviewAvatar({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-cold-blue font-heading text-sm font-bold text-tardis"
        aria-hidden="true"
      >
        {getInitials(name)}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={`Foto de perfil de ${name} en Google`}
      width={60}
      height={60}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
      style={{ borderRadius: "50%" }}
    />
  );
}
