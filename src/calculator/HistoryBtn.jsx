import { ClockCounterClockwise } from 'phosphor-react';
import { useState, useEffect } from 'react';

function HistoryBtn({ onHistoryClick }) {
  const [onClockClick, setOnClockClick] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const showSpan = onClockClick === 'Clicked';

  useEffect(() => {
    if (onClockClick === 'Clicked') {
      setIsVisible(true);

      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 1200);

      const hideTimer = setTimeout(() => {
        setOnClockClick('');
      }, 3000);

      return () => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [onClockClick]);

  const handleClick = () => {
    onHistoryClick();
    setOnClockClick('Clicked');
  };

  return (
    <div
      className="history-btn"
      onClick={handleClick}
    >
      <ClockCounterClockwise
        size={28}
        weight="bold"
      />
      {showSpan && (
        <span className={isVisible ? 'clicked' : 'fade-out'}>
          check log (F12)
        </span>
      )}
    </div>
  );
}

export default HistoryBtn;
