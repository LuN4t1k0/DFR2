import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Details = () => {
  const { id } = useParams();
  const { data } = useContext(AppContext);
  const filtro = data.find((item) => item.id === id);

  

  return (
    <>
      {filtro && (
        <div className="container flex">
          <div className="izquierda">
            <img src={filtro.img} alt="" />
          </div>
          <div className="derecha">
            <h2>{filtro.name}</h2>
            <p>{filtro.desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
