import axios from "axios";

const API = "http://localhost:8080/cars";

export const getCars = () => axios.get(API);
export const getCar = (id) => axios.get(`${API}/${id}`);
export const createCar = (data) => axios.post(API, data);
export const updateCar = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteCar = (id) => axios.delete(`${API}/${id}`);
