
import { useEffect, useRef } from 'react';

interface HighlightedTaglineProps {
  className?: string;
}

const HighlightedTagline = ({ className = "" }: HighlightedTaglineProps) => {
  const taglineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (taglineRef.current) {
      observer.observe(taglineRef.current);
    }

    return () => {
      if (taglineRef.current) {
        observer.unobserve(taglineRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={taglineRef}
      className={`relative overflow-hidden transition-all duration-500 opacity-0 transform translate-y-6 ${className}`}
    >
      <div className="fancy-highlight-border p-6 sm:p-8 md:p-10 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bfa6]/10 to-[#2d9cdb]/10 rounded-xl animate-shimmer"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00bfa6] to-[#2d9cdb] animate-pulse leading-tight">
          Premier academic coaching and counseling services 
          <span className="block mt-1">to transform your educational journey and career path.</span>
        </h2>
      </div>
    </div>
  );
};

export default HighlightedTagline;
