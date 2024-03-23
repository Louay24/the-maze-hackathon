import { Logo } from 'src/assets/icons/logo';

export const GetStartedRegistration = () => {
  return (
    <div className="get_started">
      <Logo />
      <div className="get_started-body">
        <div className="get_started-welcome">
          <h1 className="get_started_title">Welcome Wahib!</h1>
          <p className="get_started_description">
            Ready to set up your workspace and organize your tasks?
          </p>
        </div>
        <div className="get_started-navigation">
          <button>one</button>
          <button>two</button>
        </div>
      </div>
    </div>
  );
};
