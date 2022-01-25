import React, { useState } from "react";
import { Link } from "react-router-dom";
import CanalService from "../../services/CanalService";
import "./style.css";

const AddCanal = () => {
  const [canal, setCanal] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
      const result = await CanalService.create(data);
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

  const newCanal = () => {
    setCanal("");
    setSubmitted(false);
  };

  return (
    <div className="container mt-5">
      {submitted ? (
        <div>
          <h4>Pomyślnie dodano!</h4>
          <button className="btn btn-success" onClick={newCanal}>
            Dodaj nowy kanał
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
              placeholder="Nazwa kanału"
            />
          </div>
          <p id="addName"></p>

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
          <p id="addNumber"></p>

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

export default AddCanal;
