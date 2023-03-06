import React, { useState } from "react";
import type { ChangeEventHandler } from 'react';

import sum from "../../utils/sum";

import styles from "./styles";

type TOnChange = ChangeEventHandler<HTMLInputElement>;

function SumCalculator() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  const handleFirstChange: TOnChange = ({ target }) =>  setFirstNumber(parseInt(target.value, 10) || 0);
  const handleSecondChange: TOnChange = ({ target }) =>  setSecondNumber(parseInt(target.value, 10) || 0);

  return (
    <div style={styles.container}>
      <div style={styles.sentence}>
        <input style={styles.input} onChange={handleFirstChange} type="number" />
        <span style={styles.operator}>+</span>
        <input style={styles.input} onChange={handleSecondChange} type="number" />
      </div>
      <h2 style={styles.result}>
        {sum(firstNumber, secondNumber)}
      </h2>
    </div>
  );
}

export default SumCalculator;
