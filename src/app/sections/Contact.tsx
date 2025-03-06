"use client";

import { useState } from "react";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    // Aquí puedes integrar una API o servicio de correo
  };

  return (
    <section className="w-full max-w-3xl mx-auto mt-24 px-6">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">Contacto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <Input
          type="text"
          name="nombre"
          value={formData.nombre}
          placeholder="Nombre"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="email"
          value={formData.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          type="tel"
          name="telefono"
          value={formData.telefono}
          placeholder="Teléfono"
          onChange={handleChange}
        />
        <Input
          type="textarea"
          name="mensaje"
          value={formData.mensaje}
          placeholder="Mensaje"
          onChange={handleChange}
        />
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
};
