"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

interface MoveProps {
  children: React.ReactNode;
  pathN: string;
}

const Move: React.FC<MoveProps> = ({ children, pathN }) => {
  const router = useRouter();

  useEffect(() => {
    const handlePage = (event: KeyboardEvent) => {
      if (event.key === "b") {
        router.back(); // Navigate back
      } else if (event.key === "n") {
        router.push(pathN); // Navigate to the provided path
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      handlePage(event);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, pathN]);

  return <div tabIndex={0}>{children}</div>;
};

export default Move;
