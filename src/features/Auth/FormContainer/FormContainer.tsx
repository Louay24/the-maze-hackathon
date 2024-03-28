import { ReactNode } from 'react';

interface FormContainerPropsType  {
  children: ReactNode;
  title:string;
  description:string;
  onSubmit: () => void;
}
export const FormContainer = ({
  children,
  title,
  description,
  onSubmit,
}:FormContainerPropsType) => {
  return (
    <div className="auth_form_container fjc dir-col">
      <h1 className="auth_form_container-title">{title}</h1>
      <p className="auth_form_container-description">{description}</p>
      {children}
    </div>
  );
};
