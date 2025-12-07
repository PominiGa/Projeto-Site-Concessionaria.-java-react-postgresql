import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080" });

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers = config.headers || {};
		config.headers["Authorization"] = `Bearer ${token}`;
	}
	return config;
});

export const getCars = () => api.get("/cars");
export const getCar = (id) => api.get(`/cars/${id}`);
export const createCar = (data) => api.post("/cars", data);
export const updateCar = (id, data) => api.put(`/cars/${id}`, data);
export const deleteCar = (id) => api.delete(`/cars/${id}`);
