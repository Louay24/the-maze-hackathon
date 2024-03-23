import { ReactNode } from 'react';

export const FormContainer = ({
  children,
  onSubmit,
}: {
  children: ReactNode;
  onSubmit: () => void;
}) => {
  return (
    <div className="auth_form_container">
      <h1 className="auth_form_container-title">title</h1>
      <p className="auth_form_container-description">description</p>
      {children}
      <button onClick={onSubmit}>submit button</button>
    </div>
  );
};
