import { createContext, useEffect, useState } from "react";
import { getCard } from "../api/card";

export const cardContext = createContext();

export function CardProvider({ children }) {
  const [card, setCard] = useState({});

  useEffect(() => {
    (async () => {
      const res = await getCard(52222372);
      console.log(res);
      if (res.status === 200) {
        setCard(res.data.data[0]);
      }
    })();
  }, []);

  return (
    <cardContext.Provider value={{ card }}>{children}</cardContext.Provider>
  );
}
