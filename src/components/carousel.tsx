import { useState } from "react";
import "./carousel.css";

type CarouselItem = {
  src: string;
  caption?: string;
};

type CarouselProps = {
  images: CarouselItem[];
};

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const current = images[index];

  const prev = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button className="carousel-btn left" onClick={prev}>
        ‹
      </button>

      <div className="carousel-image-wrapper">
        <img src={current.src} alt={`slide-${index}`} />

        {current.caption && (
          <div className="carousel-caption">
            {current.caption}
          </div>
        )}
      </div>

      <button className="carousel-btn right" onClick={next}>
        ›
      </button>
    </div>
  );
}

export default Carousel;