import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";

function InfoPage() {
  return (
    <div className="container mx-auto px-5 h-full">
      <SectionTitle title={"Universidad Tecnologica Metropolitana (UTM)"} />
      <SectionTitle title={"Aplicaciones Web para la Industria 4.0"} />
      <SectionTitle title={"ISC. Ruth Martínez Domínguez"} />
      <SectionTitle title={"Jesús Alberto Mena Dzul"} />
      <SectionTitle
        title={
          <>
            5<sup>to</sup> Cuatrimestre - A
          </>
        }
      />
      <Link to={"/card"}>
        <button className="block mx-auto py-3 px-5 transition-all text-white bg-green-600 hover:bg-green-700 rounded-md">
          Ir a la tarjeta
        </button>
      </Link>
    </div>
  );
}

export default InfoPage;
