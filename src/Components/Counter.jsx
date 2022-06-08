import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../Components/Counter.module.css";
import {
  addition,
  decrement,
  divide,
  increment,
  muliplication,
  set_input,
  substraction,
} from "../Redux/action";

const Counter = () => {
  const dispach = useDispatch(0);
  const { count, input_value } = useSelector((state) => state);
  return (
    <div className={styles.container}>
      <div className={styles.ParentTop}>
        <h1 className={styles.count}>{count}</h1>
        <div className={styles.IncDec}>
          <Button
            colorScheme="teal"
            size="md"
            onClick={() => dispach(increment())}
          >
            Increment
          </Button>
          <Button
            colorScheme="teal"
            size="md"
            onClick={() => dispach(decrement())}
          >
            Decrement
          </Button>
        </div>
      </div>
      <div className={styles.ParentTaskBox}>
        <Input
          type="number"
          placeholder="Value"
          size="md"
          style={{ width: "90px" }}
          onChange={(e) => dispach(set_input(Number(e.target.value)))}
        />
        <div className={styles.TaskBox}>
          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => dispach(addition(input_value))}
          >
            Add
          </Button>

          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => dispach(muliplication(input_value))}
          >
            Multiply
          </Button>

          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => dispach(substraction(input_value))}
          >
            Substract
          </Button>

          <Button
            colorScheme="teal"
            size="lg"
            onClick={() => dispach(divide(input_value))}
          >
            Divide
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
