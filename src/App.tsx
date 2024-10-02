import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import Card from "./components/cards/card";

function App() {
  const [count, setCounter] = useState(0);
  //  'useMemo Hook to reduce the rerender times only when the 'arr' value changes
  const arr: number[] = useMemo(() => [1, 0, 1, 1, 1, 0], []);
  // select all Elemnts that have class "active"
  const elements = document.querySelectorAll(
    ".active"
  ) as NodeListOf<HTMLElement>;
  console.log(elements);
  useEffect(() => {
    if (extractOns(arr) === elements.length) {
      setTime(elements);
    }
  }, [elements, arr]);
  // This function get length of all buttons that have opacity 1
  const extractOns = (arr: number[]) => {
    return arr.filter((item) => (item ? item : "")).length;
  };
  // function that setTimeOut to remove all classes actives Forward to Arrange You Added It
  const setTime = (elements: NodeListOf<HTMLElement>) => {
    elements.forEach((item) => {
      const timer = Number(item.getAttribute("timer"));
      setTimeout(() => {
        item.classList.remove("active");
      }, timer * 800);
    });
  };

  // function that set Active class into buttons
  const activeFun = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (+e.currentTarget.style.opacity !== 0) {
      e.currentTarget.classList.add("active");
      e.currentTarget.setAttribute("timer", `${count}`);
      setCounter((prevCount) => prevCount + 1);
    }
  };
  return (
    <div className="flex flex-wrap gap-5">
      {arr.map((item, index: number) => (
        <Card
          key={index}
          opacity={item}
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => activeFun(e)}
        />
      ))}
    </div>
  );
}

export default App;
