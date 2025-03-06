import type { FormField, FormFieldsProps } from "../types/formFields";

export const FormFields: React.FC<FormFieldsProps> = ({ fields, formData, handleChange }) => {
  return (
    <>
      {fields.map((field: FormField) => (
        <div key={field.id} className="flex flex-col">
          {field.type === "textarea" ? (
            <textarea
              name={field.id}
              className="w-full border border-white rounded-lg p-3 bg-transparent text-white placeholder-gray-500"
              placeholder={field.label}
              onChange={handleChange}
              value={formData[field.id] || ""}
            />
          ) : (
            <input
              name={field.id}
              type={field.type}
              className="w-full border border-white rounded-lg p-3 bg-transparent text-white placeholder-gray-500"
              placeholder={field.label}
              onChange={handleChange}
              value={formData[field.id] || ""}
            />
          )}
        </div>
      ))}
    </>
  );
};