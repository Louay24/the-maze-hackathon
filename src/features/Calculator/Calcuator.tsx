export const Calcuator = () => {
  return (
    <div id="calculator">
      <input id="display" />
      <div id="keys">
        <button className="operator-btn">+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="operator-btn">-</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="operator-btn">/</button>
        <button>0</button>
        <button>.</button>
        <button>=</button>
        <button className="operator-btn">C</button>
      </div>
    </div>
  );
};
