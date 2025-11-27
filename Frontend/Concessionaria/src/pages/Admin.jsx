import { useEffect, useState } from "react";
import { getCars, createCar, updateCar, deleteCar } from "../api/carService";
import Navbar from "../components/Navbar";
import CarForm from "../components/CarForm";

import "../styles/admin.css";

export default function Admin() {
    const [cars, setCars] = useState([]);
    const [editCar, setEditCar] = useState(null);

    const load = () => {
        getCars().then(res => setCars(res.data));
    };

    useEffect(() => load(), []);

    return (
        <>
            <Navbar />

            <div className="admin-container">
                <h1>Painel do Administrador</h1>

                <h2>{editCar ? "Editar Carro" : "Adicionar Carro"}</h2>

                <CarForm
                    initial={editCar}
                    onSubmit={(data) => {
                        if (editCar) {
                            updateCar(editCar.id, data).then(() => {
                                load();
                                setEditCar(null);
                            });
                        } else {
                            createCar(data).then(load);
                        }
                    }}
                />

                <h2>Lista de Carros</h2>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th><th>Modelo</th><th>Marca</th><th>Ano</th><th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map(c => (
                            <tr key={c.id}>
                                <td>{c.id}</td>
                                <td>{c.modelo}</td>
                                <td>{c.marca}</td>
                                <td>{c.ano}</td>

                                <td>
                                    <button onClick={() => setEditCar(c)}>Editar</button>
                                    <button className="del" onClick={() => deleteCar(c.id).then(load)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
