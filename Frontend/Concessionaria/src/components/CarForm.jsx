import { useState } from "react";

export default function CarForm({ onSubmit, initial }) {
    const [form, setForm] = useState(initial || {
        chassis: "",
        marca: "",
        modelo: "",
        ano: "",
        cor: "",
        preco: "",
        km: "",
        urlImage: ""
    });

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
        //mexer aqui amanhã
    return (
            <form className="car-form" onSubmit={e => {
            e.preventDefault();

            const payload = {
                ...form,
                ano: form.ano ? parseInt(form.ano, 10) : null,
                km: form.km ? parseInt(form.km, 10) : 0,
                preco: form.preco ? parseFloat(form.preco) : 0,
                urlImage: form.urlImage || form.urlImagem || ""
            };

            onSubmit(payload);
            }}>
            <input name="chassis" placeholder="Chassi" onChange={handleChange} value={form.chassis} />
            <input name="marca" placeholder="Marca" onChange={handleChange} value={form.marca} />
            <input name="modelo" placeholder="Modelo" onChange={handleChange} value={form.modelo} />

            <input name="ano" placeholder="Ano" type="number" onChange={handleChange} value={form.ano} />
            <input name="cor" placeholder="Cor" onChange={handleChange} value={form.cor} />
            <input name="preco" placeholder="Preço" type="number" onChange={handleChange} value={form.preco} />
            <input name="km" placeholder="KM" type="number" onChange={handleChange} value={form.km} />

            <input name="urlImage" placeholder="URL da imagem" onChange={handleChange} value={form.urlImage} />

            <button type="submit">Salvar</button>
        </form>
    );
}
