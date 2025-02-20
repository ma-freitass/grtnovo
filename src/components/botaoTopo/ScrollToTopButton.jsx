import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-32 right-16 p-3 rounded-full bg-faixa text-primary shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
