import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import './circularbar.css'

export function CircularCounter({ Percentage }) {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('counter');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if the section is in the viewport
      const isVisible = rect.top <= windowHeight && rect.bottom >= 0;

      if (isVisible) {
        // const scrollTop = window.scrollY;
        const scrollHeight = document.body.scrollHeight;
        const calculatedPercentage = ((scrollHeight - windowHeight)) * 100;
        const newPercentage = Math.min(Percentage, Math.max(0, calculatedPercentage));

        setScrollPercentage(newPercentage);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [Percentage]); // Re-run effect when Percentage changes

  return (
    <div className="circular-counter py-3" id="counter">
      <div className="circle">
        <CircularProgressbar
          value={scrollPercentage}
          text={`${scrollPercentage.toFixed(1)}%`}
          styles={buildStyles({
            textColor: '#AB3045',
            pathColor: '#AB3045',
            textSize: '10px',
          })}
        />
      </div>
    </div>
  );
};
