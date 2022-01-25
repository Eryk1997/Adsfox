import http from "../http-common";

const getAll = async () => {
  return await http.get("/canals");
};

const create = async (data) => {
  return await http.post("/canals", data);
};

const get = async (id) => {
  return await http.get(`/canals/${id}`);
};

const update = async (id, data) => {
  return await http.put(`/canals/${id}`, data);
};

const remove = async (id) => {
  return await http.delete(`/canals/${id}`);
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
