import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import CanalService from "../../services/CanalService";
import { GlobalContext } from "../../context/GlobalState";

const ListCanal = () => {
  const { canals, state, setCanals, setPercentages } =
    useContext(GlobalContext);

  useEffect(async () => {
    retriveCanals();
  }, []);

  const retriveCanals = async () => {
    const result = await CanalService.getAll();
    const percentages = await CanalService.getPercentages();
    setPercentages(percentages);
    setCanals(result);
  };

  const deleteCanal = (id) => {
    CanalService.remove(id)
      .then((response) => {
        retriveCanals();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {canals.length > 0 ? (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-4 grid">
              <b>Kanał</b>
            </div>
            <div className="col-2 grid">
              <b>Ilość</b>
            </div>
            <Link to={`/addCanal/`} className="btn btn-success col-2  col-lg-1">
              Dodaj
            </Link>
            <div className="col-2  col-lg-1"></div>
          </div>
          {state.canals &&
            state.canals.map((canal) => (
              <div className="row justify-content-center">
                <div className="col-4 grid">{canal.name}</div>
                <div className="col-2 grid">{canal.number}</div>
                <Link
                  to={`/updateCanal/${canal.id}`}
                  className="btn btn-primary col-2  col-lg-1"
                >
                  Edytuj
                </Link>
                <button
                  className="btn btn-danger col-2  col-lg-1"
                  onClick={() => deleteCanal(canal.id)}
                >
                  Usuń
                </button>
              </div>
            ))}
        </div>
      ) : (
        <h1>Nie ma</h1>
      )}
    </div>
  );
};

export default ListCanal;
