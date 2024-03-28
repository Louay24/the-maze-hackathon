import { Link, useNavigate } from 'react-router-dom';
import { FormContainer } from '../FormContainer/FormContainer';
import { PATHS } from 'src/constants/paths';
import { Button } from 'antd';
import { Input } from 'src/components/Input/Input';
import ScoialMediaServiceList from '../components/ScoialMediaServiceList/SocialMediaServiceList';

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
      <div className="login_form-container">
        <Input placeholder="E-mail Adress" />
        <Input placeholder="Enter password" />
      </div>
      <div className="Login_btns-container">
      <Button className='Login_submit-btn' onClick={() => navigate(PATHS.GetStarted)} type="primary">
          login
        </Button>
        <div className="Login_or">
          <div className="Login_or-line" />
          OR
          <div className="Login_or-line" />
        </div>
        <ScoialMediaServiceList/>
        <div className='Login_footer'>
          <p className='Login_footer-text'>Don’t have an account?</p>
          <Link className='Login_footer-link' to={PATHS.Register}>register here</Link>
        </div>
      </div>
    </FormContainer>
  );
};
