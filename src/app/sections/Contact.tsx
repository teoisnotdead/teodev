"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button, FormFields } from "../components";
import { fields } from "../data";

export const Contact = () => {
  const [formData, setFormData] = useState<Record<string, string>>({
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

    // Validar campos requeridos
    for (const field of fields) {
      if (field.required && !formData[field.id].trim()) {
        toast.error(`El campo "${field.label}" es obligatorio.`, {
          icon: "❗"
        });
        return;
      }
    }

    // Si pasa la validación, mostrar éxito
    toast.success("¡Formulario enviado con éxito!", {
      icon: "🎉"
    });

    // Limpiar el formulario después de enviar
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    });

    console.log("Formulario enviado:", formData);
    // Aquí puedes integrar una API o servicio de correo
  };

  return (
    <section id="contact" className="w-full max-w-3xl mx-auto mt-24">
      <h1 className="text-center text-4xl font-bold mb-8 text-white">Contacto</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
        <FormFields fields={fields} formData={formData} handleChange={handleChange} />
        <Button type="submit">Enviar</Button>
      </form>
    </section>
  );
};
