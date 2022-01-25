import http from "../http-common";
import Validations from "../validations.js/Validations";

const getAll = async () => {
  return await http.get("/canals");
};

const create = async (data) => {
  try {
    return await http.post("/canals", data);
  } catch (e) {
    Validations(e.response.data.errors.name, "addName");
    Validations(e.response.data.errors.number, "addNumber");
  }
};

const get = async (id) => {
  try {
    return await http.get(`/canals/${id}`);
  } catch (e) {
    Validations(e.response.data.errors.message, "notFound");
  }
};

const update = async (id, data) => {
  try {
    return await http.put(`/canals/${id}`, data);
  } catch (e) {
    Validations(e.response.data.errors.name, "updateName");
    Validations(e.response.data.errors.number, "updateNumber");
    Validations(e.response.data.errors.message, "notFound");
  }
};

const remove = async (id) => {
  try {
    return await http.delete(`/canals/${id}`);
  } catch (e) {
    Validations(e.response.data.errors.message, "notFound");
  }
};

const getPercentages = async () => {
  return await http.get("/canals/percentages");
};

export default {
  getAll,
  create,
  get,
  update,
  remove,
  getPercentages,
};
