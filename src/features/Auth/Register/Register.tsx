import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';
import { Button } from 'src/components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <FormContainer
      onSubmit={() => {
        alert('register');
      }}
    >
      register Form
      <button>submit btn</button>
      <p className="auth_container-description">Continue with Google</p>
      <Button onClick={() => navigate(PATHS.Login)} type="primary">
        Continue
      </Button>
    </FormContainer>
  );
};
