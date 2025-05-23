// components/Snowfall.jsx
import React, { useEffect, useRef } from 'react';

const Snowfall = () => {
  const snowContainerRef = useRef(null);
  const snowflakes = [];

  const maxFlakes = 50;

  // Create a single snowflake
  const createSnowflake = () => {
    const flake = document.createElement('span');
    flake.innerHTML = '&bull;';
    // flake.innerHTML = '❤';
    flake.className = 'text-white text-xl absolute pointer-events-none';
    flake.style.position = 'absolute';
    flake.style.top = '-20px';
    flake.style.left = `${Math.random() * window.innerWidth}px`;
    flake.style.opacity = `${0.3 + Math.random() * 0.7}`;
    flake.style.fontSize = `${10 + Math.random() * 20}px`;

    if (snowContainerRef.current) {
      snowContainerRef.current.appendChild(flake);
    }

    snowflakes.push(flake);
    animateSnowflake(flake);
  };

  // Animate the snowflake falling
  const animateSnowflake = (flake) => {
    let y = 0;
    let x = parseFloat(flake.style.left || '0');
    const speed = 1 + Math.random() * 2;
    const drift = (Math.random() - 0.5) * 1.5;

    const fall = () => {
      y += speed;
      x += drift;
      flake.style.top = `${y}px`;
      flake.style.left = `${x}px`;

      if (y < window.innerHeight) {
        requestAnimationFrame(fall);
      } else {
        flake.remove();
        const index = snowflakes.indexOf(flake);
        if (index !== -1) snowflakes.splice(index, 1);
      }
    };

    fall();
  };

  useEffect(() => {
    let interval;

    if (snowContainerRef.current) {
      interval = setInterval(() => {
        if (snowflakes.length < maxFlakes) {
          createSnowflake();
        }
      }, 200);
    }

    return () => {
      clearInterval(interval);
      snowflakes.forEach((flake) => flake.remove());
    };
  }, []);

  return (
    <div
      ref={snowContainerRef}
      className="pointer-events-none fixed top-0 left-0 w-full h-full overflow-hidden z-50"
    />
  );
};

export default Snowfall;
