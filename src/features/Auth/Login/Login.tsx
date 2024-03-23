import { FormContainer } from '../FormContainer/FormContainer';

export const Login = () => {
  return (
    <FormContainer
      onSubmit={() => {
        alert('login');
      }}
    >
      Login Form
      <button>submit btn</button>
      <p className="auth_container-description">Continue with Google</p>
    </FormContainer>
  );
};
