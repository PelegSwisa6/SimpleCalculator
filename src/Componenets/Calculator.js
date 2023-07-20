import React, { useState, useEffect } from "react";
import Button from "./Button";
import Display from "./Display";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  useEffect(() => {
    const handleKeyDown = (event) => {
      const keyPressed = event.key;
      const validKeys = /^[0-9+\-*/.=C]$/;

      if (validKeys.test(keyPressed)) {
        if (keyPressed === "=" || keyPressed === "Enter") {
          handleEvaluate();
        } else if (keyPressed === "C") {
          handleClear();
        } else if (keyPressed === "Backspace") {
          handleDelete();
        } else {
          handleButtonClick(keyPressed);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [expression]);

  const handleButtonClick = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleEvaluate = () => {
    try {
      setExpression(eval(expression).toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleDelete = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  return (
    <div className="calculator">
      <Display expression={expression} />
      <div className="buttons">
        <Button onClick={handleButtonClick}>1</Button>
        <Button onClick={handleButtonClick}>2</Button>
        <Button onClick={handleButtonClick}>3</Button>
        <Button onClick={handleButtonClick}>+</Button>
        <Button onClick={handleButtonClick}>4</Button>
        <Button onClick={handleButtonClick}>5</Button>
        <Button onClick={handleButtonClick}>6</Button>
        <Button onClick={handleButtonClick}>-</Button>
        <Button onClick={handleButtonClick}>7</Button>
        <Button onClick={handleButtonClick}>8</Button>
        <Button onClick={handleButtonClick}>9</Button>
        <Button onClick={handleButtonClick}>*</Button>
        <Button onClick={handleButtonClick}>0</Button>
        <Button onClick={handleButtonClick}>.</Button>
        <Button onClick={handleButtonClick}>/</Button>
        <Button onClick={handleEvaluate}>=</Button>
        <Button onClick={handleClear}>C</Button>
      </div>
    </div>
  );
};

export default Calculator;
