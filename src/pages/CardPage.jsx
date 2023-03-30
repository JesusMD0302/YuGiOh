import { useContext } from "react";
import DescriptionContainer from "../components/DescriptionContainer";
import InfoCard from "../components/InfoCard";
import SetCard from "../components/SetCard";
import { cardContext } from "../context/CardContex";

function CardPage() {
  const { card } = useContext(cardContext);

  return (
    <div className="mx-auto px-5 h-full grid grid-cols-3 gap-5">
      <section className="h-full grid grid-cols-2 grid-rows-4 gap-2">
        <InfoCard title={"Tipo"} content={card.type} />
        <InfoCard title={"Tipo de cuadro"} content={card.frameType} />
        <InfoCard title={"Ataque"} content={card.atk} />
        <InfoCard title={"Atributo"} content={card.attribute} />
        <InfoCard title={"Raza"} content={card.race} />
        <InfoCard title={"Nivel"} content={card.level} />
        <InfoCard title={"Defensa"} content={card.def} />
        <InfoCard title={"Arquetipo"} content={card.archetype} />
      </section>
      <section className="flex flex-col gap-4 items-center">
        <h2 className="text-4xl text-white">{card.name}</h2>
        <img src={card.card_images[0].image_url} className="w-80 rounded-md" />
      </section>
      <section>
        <DescriptionContainer
          title={"Texto de la tarjeta"}
          content={card.desc}
        />
        <DescriptionContainer
          title={"Juegos de cartas"}
          content={card.card_sets.map((set) => (
            <SetCard set={set} />
          ))}
        />
      </section>
    </div>
  );
}

export default CardPage;
