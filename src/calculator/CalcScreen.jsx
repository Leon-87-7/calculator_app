import DeleteBtn from './DeleteBtn';
import HistoryBtn from './HistoryBtn';

function CalcScreen({
  currentInput,
  previousInput,
  operator,
  result,
  onHistoryClick,
  onDeleteClick,
}) {
  return (
    <div className="calc-screen">
      <section className="output-section">
        <div className="input-display">
          {previousInput}{' '}
          <span style={{ color: 'tomato' }}>{operator}</span>{' '}
          {currentInput}
        </div>
        <div className="calc-result">
          {result}
          {/* {previousInput} */}
        </div>
      </section>
      <div className="control-line">
        <HistoryBtn onHistoryClick={onHistoryClick} />
        <DeleteBtn onDeleteClick={onDeleteClick} />
      </div>
    </div>
  );
}

export default CalcScreen;
