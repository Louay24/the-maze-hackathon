import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { Button } from 'antd';
import { Input } from 'src/components/Input/Input';
import ScoialMediaServiceList from '../components/ScoialMediaServiceList/SocialMediaServiceList';
import { Paths } from 'src/constants/paths';

export const Login = () => {
  const navigate = useNavigate();
  return (
    <FormContainer
      title="Login your infinity bug account"
      description="By loging in your infinity bug account, you will be able to create your workspace, invite your team members and manage your project in the right way"
      onSubmit={() => {
        alert('login');
      }}
    >
      <div className="login_form-container">
        <Input placeholder="E-mail Adress" />
        <Input placeholder="Enter password" />
      </div>
      <div className="Login_btns-container">
        <Button
          className="Login_submit-btn"
          onClick={() => navigate(Paths.GetStarted)}
          type="primary"
        >
          login
        </Button>
        <div className="Login_or">
          <div className="Login_or-line" />
          OR
          <div className="Login_or-line" />
        </div>
        <ScoialMediaServiceList />
        <div className="Login_footer">
          <p className="Login_footer-text">Don’t have an account?</p>
          <Link className="Login_footer-link" to={Paths.Register}>
            register here
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};
