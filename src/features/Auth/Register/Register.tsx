import { Link } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';

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
      <Link to={PATHS.login}>login</Link>
    </FormContainer>
  );
};
