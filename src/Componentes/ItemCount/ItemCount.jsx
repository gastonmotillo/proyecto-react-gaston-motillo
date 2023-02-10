import { useState, useEffect } from "react";
import "./ItemCount.css";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(parseInt(initial));

  const sumar = () => {
    setCount(count + 1);
  };

  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    setCount(parseInt(initial));
  }, [initial]);

  return (
    <div className="itemcount">
      <div className="contador">
        <button className="sumar" onClick={sumar}>
          +
        </button>
        <span className="numero">{count}</span>
        <button className="restar" onClick={restar}>
          -
        </button>
      </div>
      <div>
        {count > stock ? (
          <h2 className="stock">Sin Stock!</h2>
        ) : (
          <button className="agregar" onClick={() => onAdd(count)}>
            Agregar al Carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemCount;
