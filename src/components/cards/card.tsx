import React from "react";
interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  opacity: number;
}
function Card({ onClick, opacity }: Props) {
  return (
    <button
      className="w-[150px] h-[200px] rounded-md border-4 m-auto"
      style={{ opacity }}
      onClick={onClick}
    >
      card
    </button>
  );
}

export default Card;
