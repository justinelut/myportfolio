"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { setTheme, theme } = useTheme();


  const SwitchButtons = () => {
    if (theme == "light" || theme == 'system') {
      return (
        <button onClick={() => setTheme("dark")}>
          <Moon />
        </button>
      );
    } else {
      return (
        <button onClick={() => setTheme("light")}>
          <Sun />
        </button>
      );
    }
  };

  return (
    <div>
      <SwitchButtons />
    </div>
  );
}
