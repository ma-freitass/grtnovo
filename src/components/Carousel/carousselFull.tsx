// components/FullWidthCarouselAutoScroll.tsx
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

export default function FullWidthCarouselAutoScroll({ images, speed = 1 }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;
    const scroll = () => {
      container.scrollLeft += speed;
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0; // reinicia o scroll
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  // Duplicar as imagens para simular scroll infinito
  const repeatedImages = [...images, ...images];

  return (
    <section className="w-full overflow-hidden py-6 bg-gray-100">
      <motion.div
        ref={containerRef}
        className="flex gap-6 overflow-x-scroll no-scrollbar scroll-smooth scroll-snap-x"
      >
        {repeatedImages.map((src, index) => (
          <motion.img
            key={index}
            src={src}
            alt={`Imagem ${index + 1}`}
            className="h-64 w-auto flex-shrink-0 rounded-xl object-cover shadow-lg scroll-snap-start transition-transform duration-500 hover:scale-105"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          />
        ))}
      </motion.div>
    </section>
  );
}

FullWidthCarouselAutoScroll.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  speed: PropTypes.number, // pixels por frame
};
