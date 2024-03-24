import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';
import { Button } from 'antd';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <FormContainer
      onSubmit={() => {
        alert('login');
      }}
    >
      Login Form
      <button>submit btn</button>
      <p className="auth_container-description">Continue with Google</p>
      <Link to={PATHS.Register}>register</Link>
      <Button onClick={() => navigate(PATHS.GetStarted)} type="primary">
        Continue
      </Button>
    </FormContainer>
  );
};
