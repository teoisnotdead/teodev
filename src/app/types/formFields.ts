export interface FormField {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

export interface FormFieldsProps {
  fields: FormField[];
  formData: Record<string, string>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}