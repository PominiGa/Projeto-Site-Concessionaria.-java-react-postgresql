import "./card.css";

interface CardProps {
    chassi: string;
    marca: string;
    modelo: string;
    cor: string;
    valor: number;
    imagem: string;
    ano: number;
    km: number;
    vendido: boolean;
}
export function Card({chassi, marca, modelo, cor, valor, imagem, ano, km, vendido}: CardProps) {
  return (
    <div className="card">
        <img/>
      <h2></h2>
      <p><b>Valor:</b></p>
    </div>
  )
}