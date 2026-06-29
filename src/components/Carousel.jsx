import MarqueeLib from "react-fast-marquee";
const Marquee = MarqueeLib.default || MarqueeLib;

import './Carousel.css';

export default function Carousel({ images }) {
  const half = Math.ceil(images.length / 2);
  const topImages = images.slice(0, half);
  const bottomImages = images.slice(half);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%' }}>
      {/* Top row — scrolls left */}
      <Marquee speed={50} gradient={false} direction="left">
        {topImages.map((src, i) => (
          <img key={i} src={src} alt={`Logo ${i + 1}`} className="carousel-item" />
        ))}
      </Marquee>

      {/* Bottom row — scrolls right */}
      <Marquee speed={50} gradient={false} direction="left">
        {bottomImages.map((src, i) => (
          <img key={i} src={src} alt={`Logo ${i + 1}`} className="carousel-item" />
        ))}
      </Marquee>
    </div>
  );
}