import React from "react";
interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  opacity: number;
  //   timerValue: number;
}
function Card({ onClick, opacity /*timerValue*/ }: Props) {
  //   console.log(timerValue);
  return (
    <button
      className="w-[150px] h-[200px] rounded-md border-4 m-auto text-xl text-slate-400"
      style={{ opacity }}
      onClick={onClick}
    >
      Click Me!
    </button>
  );
}

export default Card;
