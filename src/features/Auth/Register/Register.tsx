import { FormContainer } from '../FormContainer/FormContainer';

export const Register = () => {
  return (
    <FormContainer
      onSubmit={() => {
        alert('register');
      }}
    >
      register Form
      <button>submit btn</button>
      <p className="auth_container-description">Continue with Google</p>
    </FormContainer>
  );
};
