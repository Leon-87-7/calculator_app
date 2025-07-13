function NumPad({
  onNumberClick,
  onOperatorClick,
  onEqualsClick,
  onClearClick,
  onDecimalClick,
  onToggleSignClick,
  onNewClick,
}) {
  return (
    <div className="num-pad">
      <button
        className="operators-top"
        onClick={onClearClick}
      >
        AC
      </button>
      <button
        className="operators-top"
        onClick={onNewClick}
      >
        New
      </button>
      <button
        className="operators-top"
        onClick={() => {
          onOperatorClick('%');
        }}
      >
        %
      </button>
      <button
        className="operators-right"
        onClick={() => {
          onOperatorClick('/');
        }}
      >
        /
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('7');
        }}
      >
        7
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('8');
        }}
      >
        8
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('9');
        }}
      >
        9
      </button>
      <button
        className="operators-right"
        onClick={() => {
          onOperatorClick('*');
        }}
      >
        X
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('4');
        }}
      >
        4
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('5');
        }}
      >
        5
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('6');
        }}
      >
        6
      </button>
      <button
        className="operators-right"
        onClick={() => {
          onOperatorClick('-');
        }}
      >
        -
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('1');
        }}
      >
        1
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('2');
        }}
      >
        2
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('3');
        }}
      >
        3
      </button>
      <button
        className="operators-right"
        onClick={() => {
          onOperatorClick('+');
        }}
      >
        +
      </button>
      <button
        className="operators-center"
        onClick={onToggleSignClick}
      >
        +/-
      </button>
      <button
        className="operators-center"
        onClick={() => {
          onNumberClick('0');
        }}
      >
        0
      </button>
      <button
        className="operators-center"
        onClick={onDecimalClick}
      >
        .
      </button>
      <button
        className="operators-right"
        onClick={onEqualsClick}
      >
        =
      </button>
    </div>
  );
}

export default NumPad;
