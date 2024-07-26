"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col gap-3 justify-center items-center mt-3">
      <h2 className="text-3xl">Something went wrong!</h2>
      <p className="text-red-500">{"Error: " + error.message}</p>
      <button
        className="block px-2.5 py-1.5 bg-pink-600 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
