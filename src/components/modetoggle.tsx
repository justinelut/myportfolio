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
          className="bg-orange-600 z-30 rounded-full items-center justify-center w-12 h-12 px-4 py-2 flex"
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
          className="bg-orange-600 z-30 rounded-full items-center justify-center w-12 h-12 px-4 py-2 flex"
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
