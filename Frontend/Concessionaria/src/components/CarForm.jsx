import { useState, useEffect } from "react";

export default function CarForm({ onSubmit, initial }) {
    const [form, setForm] = useState({
        chassis: "",
        marca: "",
        modelo: "",
        ano: "",
        cor: "",
        preco: "",
        km: "",
        urlImagem: ""
    });

    useEffect(() => {
        if (initial) {
            setForm({
                ...initial,
                preco: initial.preco,
            });
        }
    }, [initial]);

    const handleChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            chassis: form.chassis,
            marca: form.marca,
            modelo: form.modelo,
            ano: Number(form.ano),
            cor: form.cor,
            preco: Number(form.preco),  
            km: Number(form.km),
            urlImagem: form.urlImagem
        };

        onSubmit(data);
    };

    return (
        <form className="car-form" onSubmit={handleSubmit}>
            <input name="chassis" placeholder="Chassi" onChange={handleChange} value={form.chassis} />
            <input name="marca" placeholder="Marca" onChange={handleChange} value={form.marca} />
            <input name="modelo" placeholder="Modelo" onChange={handleChange} value={form.modelo} />

            <input name="ano" placeholder="Ano" type="number" onChange={handleChange} value={form.ano} />
            <input name="cor" placeholder="Cor" onChange={handleChange} value={form.cor} />

            <input name="preco" placeholder="Preço" type="number" onChange={handleChange} value={form.preco} />
            <input name="km" placeholder="KM" type="number" onChange={handleChange} value={form.km} />

            <input name="urlImagem" placeholder="URL da imagem" onChange={handleChange} value={form.urlImagem} />

            <button type="submit">
                {initial ? "Editar Carro" : "Salvar"}
            </button>
        </form>
    );
}
