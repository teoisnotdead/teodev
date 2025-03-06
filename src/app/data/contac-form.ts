import { FormField } from "../types/formFields";

export const fields: FormField[] = [
  { id: "nombre", label: "Nombre", type: "text", required: true },
  { id: "email", label: "Email", type: "email", required: true },
  { id: "telefono", label: "Teléfono (opcional)", type: "tel" },
  { id: "mensaje", label: "Mensaje", type: "textarea", required: true },
];