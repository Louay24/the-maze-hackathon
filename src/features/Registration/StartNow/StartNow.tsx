import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { Button } from 'src/components/Button/Button';
import { PATHS } from 'src/constants/paths';
import { FireFilled } from '@ant-design/icons';

export const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div className="start_now">
      <div className="start_now-header">
        <h1 className="get_started-title grotesk">
          Enhance Collaboration, And Boost Productivity
          <FireFilled />
        </h1>
        <p className="start_now-description">
          Streamline your workflow with our comprehensive task and project
          management platform, designed to simplify project organization, task
          delegation, and progress tracking for teams of all sizes.
        </p>
      </div>
      <div className="start_now-footer">
        <div className="fac">
          <Button
            onClick={() => message.error('Not yet')}
            className="get_started-navigation-back"
            type="link"
          >
            About Us
          </Button>
          <Button
            onClick={() => navigate(PATHS.Register)}
            className="get_started-navigation-next"
          >
            GetStarted !{<RightArrow />}
          </Button>
        </div>
        <div>
          <h4 className="start_now-footer-extra">
            Already have an account?
            {/* <a href="#" className="start_now-reference">
              click here
            </a> */}
          </h4>
        </div>
      </div>
    </div>
  );
};
