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

export interface InputProps {
  type?: "text" | "email" | "tel" | "textarea";
  name: string;
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface SocialProps {
  name: string;
  icon: string;
  link: string;
}

export interface SocialsProps {
  socials?: SocialProps[];
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

export interface TagsProps {
  iconSrc: string;
  tagName: string;
}

export interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  demoLink: string;
}