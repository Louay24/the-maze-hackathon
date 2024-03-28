import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';
import { Button } from 'antd';
import { Input } from 'src/components/Input/Input';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <FormContainer
      title="Login your Wayzello account"
      description="By loging in your Wayzello account, you will be able to create your workspace, invite your team members and manage your project in the right way"
      onSubmit={() => {
        alert('login');
      }}
    >
      <div className="login-form-container">
        <Input placeholder="E-mail Adress" />
        <Input placeholder="Enter password" />
      </div>
      <div className="Login_btns-container">
        <button>Login</button>
        <div className="Login_or">
          <div className="Login_or-line" />
          OR
          <div className="Login_or-line" />
        </div>
        <p className="auth_container-description">Continue with Google</p>
        <Link to={PATHS.Register}>register</Link>
        <Button onClick={() => navigate(PATHS.GetStarted)} type="primary">
          log in
        </Button>
      </div>
    </FormContainer>
  );
};
