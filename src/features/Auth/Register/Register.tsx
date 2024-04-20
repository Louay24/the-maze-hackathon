import { FormContainer } from '../FormContainer/FormContainer';
import { Button } from 'src/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { Paths } from 'src/constants/paths';

export const Register = () => {
  const navigate = useNavigate();
  return (
    <FormContainer
      title="Create your infinity bug account"
      description="By creating your infinity bug account, you will be able to create your workspace, invite your team members and manage your project in the right way"
      onSubmit={() => {
        alert('register');
      }}
    >
      register Form
      <button>submit btn</button>
      <p className="auth_container-description">Continue with Google</p>
      <Button onClick={() => navigate(Paths.Login)} type="primary">
        Continue
      </Button>
    </FormContainer>
  );
};
