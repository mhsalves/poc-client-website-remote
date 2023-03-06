import React from "react";

import useCounter from "../../hooks/useCounter";
import styles from "./styles";

function Timer() {
  const { count, resetCounter } = useCounter();

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Timer</h2>
      <h3 style={styles.counter}>{count}</h3>
      <button style={styles.resetButton} onClick={() => resetCounter()}>
        Reiniciar contador
      </button>
    </div>
  )  
}

export default Timer;
