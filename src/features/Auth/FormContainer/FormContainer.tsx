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
    <div className="auth_form fjc dir-col">
      <div className='auth_form_container'>
      <div className='auth_form_container-header'>
      <h1 className="auth_form_container-title">{title}</h1>
      <p className="auth_form_container-description">{description}</p>
      </div>
      <div className='auth_form-children-container'>{children}</div>
      </div>
    </div>
  );
};
