import axios from "axios";
const baseURL = "http://localhost:3001/persons"

const getAll = () => {
  const req = axios.get(baseURL)
  return req.then(response => response.data);
}

const create = nameObj => {
  const req = axios.post(baseURL, nameObj);
  return req.then(response => response.data);
}

const deleteContact = (id) => {
  const req = axios.delete(`${baseURL}/${id}`);
  return req.then(response => response.data);
}

const updateContact = (id, newObj) => {
  const req = axios.put(`${baseURL}/${id}`, newObj);
  return req.then(response => response.data);
}

export default {
  getAll,
  create,
  deleteContact,
  updateContact,
}