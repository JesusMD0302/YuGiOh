import { useState } from "react";

function InfoCard({ title, content }) {
  const [active, setActive] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setActive(true);
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
      className="py-3 px-5 bg-blue-400 rounded-md flex flex-col transition-all  hover:scale-110 hover:bg-blue-200 justify-center items-center"
    >
      <h3 className="text-lg font-bold">{active ? content : title}</h3>
    </div>
  );
}

export default InfoCard;
