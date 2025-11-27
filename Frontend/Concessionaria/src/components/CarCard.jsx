import "../styles/carcard.css";

export default function CarCard({ car }) {
    return (
        <div className="car-card">
            <img
                src={car.urlImagem}
                alt={car.modelo}
                className="car-img"
            />

            <h3>{car.marca} {car.modelo}</h3>

            <p><strong>Ano:</strong> {car.ano}</p>
            <p><strong>Cor:</strong> {car.cor}</p>
            <p><strong>KM:</strong> {car.km} km</p>

            <h2>
                {Number(car.preco).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </h2>

        </div>
    );
}
