import { useState } from "react";

export const Footer = ({ title }) => {
  const [count, setCount] = useState(0);
  let num = 0;
  return (
    <div className="bg-zinc-500">
      <img
        src="/images/logo.png"
        alt=""
        onClick={() => setCount((prev) => prev + 1)}
      />
      <p>{count}</p>
      <p
        onClick={() => {
          num = num + 1;
          console.log(num);
        }}
      >
        {num}
      </p>
    </div>
  );
};
