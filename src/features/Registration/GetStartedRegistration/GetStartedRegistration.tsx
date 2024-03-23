import { Logo } from 'src/assets/icons/logo';
import { Button } from 'src/components/Button/Button';

export const GetStartedRegistration = () => {
  return (
    <div className="get_started">
      <Logo />
      <div className="get_started-body">
        <div className="get_started-welcome">
          <h1 className="get_started_title">Welcome Si Louay!</h1>
          <p className="get_started_description">
            Ready to set up your workspace and organize your tasks?
          </p>
        </div>
        <div className="get_started-navigation">
          <Button type="link" title="Back" />
          <Button className="get_started-navigation-next">Absolutely</Button>
        </div>
      </div>
    </div>
  );
};
