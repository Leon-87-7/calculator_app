function NumPad() {
  return (
    <div className="num-pad">
      <button className="operators-top">AC</button>
      <button className="operators-top">( )</button>
      <button className="operators-top">%</button>
      <button className="operators-right">/</button>
      <button className="operators-center">7</button>
      <button className="operators-center">8</button>
      <button className="operators-center">9</button>
      <button className="operators-right">X</button>
      <button className="operators-center">4</button>
      <button className="operators-center">5</button>
      <button className="operators-center">6</button>
      <button className="operators-right">-</button>
      <button className="operators-center">1</button>
      <button className="operators-center">2</button>
      <button className="operators-center">3</button>
      <button className="operators-right">+</button>
      <button className="operators-center">+/-</button>
      <button className="operators-center">0</button>
      <button className="operators-center">.</button>
      <button className="operators-right">=</button>
    </div>
  );
}

export default NumPad;
