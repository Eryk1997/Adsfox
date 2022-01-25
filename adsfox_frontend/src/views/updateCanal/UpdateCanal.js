import React, { useState, useEffect, useContext } from "react";
import CanalService from "../../services/CanalService";

import { GlobalContext } from "../../context/GlobalState";
import { Link, useParams } from "react-router-dom";

const UpdateCanal = () => {
  const { id } = useParams();
  const [canal, setCanal] = useState({});

  useEffect(async () => {
    const result = await CanalService.get(id);
    setCanal(result.data);
  }, []);

  const initalState = {
    name: "",
    number: 0,
  };

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCanal({ ...canal, [name]: value });
  };

  const saveCanal = () => {
    let data = {
      name: canal.name,
      number: canal.number,
    };

    CanalService.update(id, data)
      .then((response) => {
        setCanal({
          id: response.data.id,
          name: response.data.name,
          number: response.data.number,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCanal = () => {
    setCanal(initalState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form mt-5">
      {submitted ? (
        <div>
          <h4>Pomyślnie zaktualizowano!</h4>
          <button className="btn btn-success" onClick={newCanal}>
            Wprowadz zmiany
          </button>
          <Link to={`/`} className="btn btn-primary">
            Zobacz Kanały
          </Link>
        </div>
      ) : (
        <div className="d-flex justify-content-center mt-5">
          <div className="form-group">
            <label htmlFor="name">Kanał</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={canal.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Nazwa kanału"
            />
          </div>

          <div className="form-group">
            <label htmlFor="number">Ilosc</label>
            <input
              type="number"
              className="form-control"
              id="number"
              required
              value={canal.number}
              onChange={handleInputChange}
              name="number"
            />
          </div>

          <div className="mt-4">
            <button onClick={saveCanal} className="btn btn-success">
              Dodaj
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCanal;
