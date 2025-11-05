import React from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';

const phrases = [
  "Unlocking Biblical Secrets",
  "Unsealing Biblical Secrets",
  "Unlocking Biblical Truths",
  "Exposing Theological Tricks",
  "Liberating the Masses"
];

const AnimatedHeadline: React.FC = () => {
  const typedText = useTypingEffect(phrases);

  // The h1 is now the container for the wipe effect, but not the text gradient itself.
  const headlineContainerClasses = `
    h1-wipe
    font-orbitron
    text-4xl
    md:text-6xl
    lg:text-7xl
    font-extrabold
    text-center
  `;

  return (
    <h1 className={headlineContainerClasses.trim().replace(/\s+/g, ' ')}>
      {/* The text-gradient is applied to this span, which sits on a higher z-index layer. */}
      <span className="relative z-10 text-gradient">
        {typedText}
        <span className="animate-blink text-gray-400 dark:text-gray-500">|</span>
      </span>
    </h1>
  );
};

export default AnimatedHeadline;