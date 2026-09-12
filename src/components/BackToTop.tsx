import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-lime-400/30 bg-[#0e0e12]/90 text-lime-400 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-lime-400 hover:bg-lime-400 hover:text-black hover:scale-110"
      aria-label="Scroll back to top of page"
      title="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  );
};
