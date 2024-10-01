import React from "react";
interface Props {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
function Card({ onClick }: Props) {
  return (
    <button
      className="w-[150px] h-[200px] rounded-md border-4 m-auto"
      onClick={onClick}
    >
      card
    </button>
  );
}

export default Card;
