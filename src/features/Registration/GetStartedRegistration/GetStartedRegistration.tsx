import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { Button } from 'src/components/Button/Button';
import { PATHS } from 'src/constants/paths';

export const GetStartedRegistration = () => {
  const navigate = useNavigate();
  return (
    <div className="get_started-body">
      <div className="get_started-welcome">
        <h1 className="get_started-title">Welcome Wahib!</h1>
        <p className="get_started-description">
          Ready to set up your workspace and organize your tasks?
        </p>
      </div>
      <div className="get_started-navigation">
        <Button
          onClick={() => navigate(-1)}
          className="get_started-navigation-back"
          type="link"
        >
          Back
        </Button>
        <Button
          onClick={() => navigate(PATHS.WorkSpaceConfig1)}
          className="get_started-navigation-next"
        >
          Yes Absolutely !{<RightArrow />}
        </Button>
      </div>
    </div>
  );
};
