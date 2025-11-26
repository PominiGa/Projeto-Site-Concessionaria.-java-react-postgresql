import { useEffect, useState } from "react";
import { getCars } from "../api/carService";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";

import "../styles/global.css";

export default function Home() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        getCars().then(res => setCars(res.data));
    }, []);

    return (
        <>
            <Navbar />

            <div className="container">
                <h1>Carros disponíveis</h1>

                <div className="grid">
                    {cars.map(c => <CarCard key={c.id} car={c} />)}
                </div>
            </div>
        </>
    );
}
