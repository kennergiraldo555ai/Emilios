import { useState, useEffect } from 'react';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 2400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`preloader ${exiting ? 'preloader-exit' : ''}`}>
      <div className="preloader-logo">Emilios</div>
      <div className="preloader-line" />
      <div className="preloader-tagline">Restaurante</div>
    </div>
  );
}
