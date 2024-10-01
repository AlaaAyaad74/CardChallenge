import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/cards/card";

function App() {
  const [count, setCounter] = useState(0);
  useEffect(() => {
    if (count === 7) {
      const elements = document.querySelectorAll(".active");

      elements.forEach((item) => {
        const timer = Number(item.getAttribute("timer"));

        setTimeout(() => {
          item.classList.remove("active");
        }, timer * 800);
      });
      setCounter(0);
    }
  }, [count]);
  const activeFun = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.currentTarget.classList.add("active");
    e.currentTarget.setAttribute("timer", `${count}`);
    setCounter((prevCount) => prevCount + 1);
  };
  return (
    <div className="flex flex-wrap gap-5">
      {Array.from({ length: 7 }, (_, index: number) => (
        <Card
          key={index}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => activeFun(e)}
        />
      ))}
    </div>
  );
}

export default App;
