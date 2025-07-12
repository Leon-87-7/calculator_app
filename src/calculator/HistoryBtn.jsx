import { ClockCounterClockwise } from 'phosphor-react';

function HistoryBtn({ onHistoryClick }) {
  return (
    <div
      className="history-btn"
      onClick={onHistoryClick}
    >
      <ClockCounterClockwise
        size={28}
        weight="bold"
      />
    </div>
  );
}

export default HistoryBtn;
