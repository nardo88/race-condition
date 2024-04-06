import { FC, useEffect, useState } from "react";
import cls from "./Effect.module.scss";

export const Effect: FC = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount((p) => ++p);
  };

  useEffect(() => {
    return () => {
      console.log("count: ", count);
    };
  }, [count]);
  return (
    <div className={cls.Effect}>
      <h1>{count}</h1>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};
