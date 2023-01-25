"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateLetterButton() {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        router.replace("/letters/new");
      }}
    >
      Create
    </button>
  );
}
