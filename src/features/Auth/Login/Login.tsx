import { Link } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';

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
      <Link to={PATHS.register}>register</Link>
    </FormContainer>
  );
};
