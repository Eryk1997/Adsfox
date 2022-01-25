import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./style.css";

import CanalService from "../../services/CanalService";

import { GlobalContext } from "../../context/GlobalState";

const ListCanal = () => {
  const { canals,state, dispatch, setCanals,setPercentages } = useContext(GlobalContext);

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
    <div className="col-10 d-flex justify-content-center m-auto mt-5">
      {canals.length > 0 ? (
      <table class="table table-striped">
        <thead className="">
          <tr>
            <th scope="col">Kanał</th>
            <th scope="col">Ilość</th>
            <td>
            <Link
                  to={`/addCanal/`}
                  className="btn btn-primary"
                >
                   Dodaj nowy Kanał
                </Link>
            </td>
          </tr>
        </thead>
        <tbody>
          {state.canals &&
            state.canals.map((canal) => (
              <tr>
                <td className='col-6'>{canal.name}</td>
                <td className="col-2">{canal.number}</td>
                <td>
                <Link
                  to={`/updateCanal/${canal.id}`}
                  
                  className="btn btn-primary"
                >
                  Edytuj
                </Link>
                <button className="btn btn-danger" onClick={() => deleteCanal(canal.id)}>Usuń</button>
                </td>
                </tr>

            ))}
        </tbody>
      </table>
      ) : (
        <h4 className="text-center">No Canals</h4>
      )}
    </div>
  );
};

export default ListCanal;
