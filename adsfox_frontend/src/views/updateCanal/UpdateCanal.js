import React, { useState, useEffect } from "react";
import CanalService from "../../services/CanalService";

import { Link, useParams } from "react-router-dom";

const UpdateCanal = () => {
  const { id } = useParams();
  const [canal, setCanal] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(async () => {
    const result = await CanalService.get(id);
    setCanal(result.data);
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCanal({ ...canal, [name]: value });
  };

  const saveCanal = async () => {
    let data = {
      name: canal.name,
      number: canal.number,
    };

    try {
      const result = await CanalService.update(id, data);
      setCanal({
        id: result.data.id,
        name: result.data.name,
        number: result.data.number,
      });
      setSubmitted(true);
    } catch {
      console.log("error");
    }
  };

  const updateCanal = () => {
    setCanal("");
    setSubmitted(false);
  };

  return (
    <div className="container mt-5">
      {submitted ? (
        <div>
          <h4>Pomyślnie zaktualizowano!</h4>
          <button className="btn btn-success" onClick={updateCanal}>
            Wprowadz zmiany
          </button>
          <Link to={`/`} className="btn btn-primary">
            Zobacz Kanały
          </Link>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-5 col-lg-3">
            <label htmlFor="name">Kanał</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={canal.name}
              onChange={handleInputChange}
              name="name"
              placeholder="Nowa nazwa kanału"
            />
          </div>
          <p id="updateName"></p>

          <div className="col-5 col-lg-3">
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
          <p id="updateNumber"></p>
          <p id="notFound"></p>

          <div className="mt-4">
            <button onClick={saveCanal} className="btn btn-success">
              Aktualizuj
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateCanal;
