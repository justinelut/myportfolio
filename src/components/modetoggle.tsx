import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const SwitchButtons = () => {
    const buttonVariants = {
      hidden: { scale: 0, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
    };

    if (theme === "light" || theme === "system") {
      return (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </motion.button>
      );
    } else {
      return (
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          onClick={() => setTheme("light")}
        >
          <Sun />
        </motion.button>
      );
    }
  };

  return (
    <div>
      <SwitchButtons />
    </div>
  );
}
