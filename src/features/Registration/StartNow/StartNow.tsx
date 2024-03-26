import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { Button } from 'src/components/Button/Button';
import { PATHS } from 'src/constants/paths';
import { FireOutlined } from '@ant-design/icons';
import people from 'src/assets/images/people.jpeg';

export const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div className="start_now-main start_now">
      <img src={people} alt="start now" className="start_now-pic" />
      <h1 className="get_started_title start_now-spacer-top">
        Enhance Collaboration, And Boost Productivity
        <FireOutlined />
      </h1>
      <p className="start_now-description start_now-spacer-bottom">
        Streamline your workflow with our comprehensive task and project
        management platform, designed to simplify project organization, task
        delegation, and progress tracking for teams of all sizes.
      </p>

      <div className="start_now-layout fac start_now-spacer-bottom">
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
      <h4  className='start_now-extra'>
        Already have an account?{' '}
        <a href="#" className="start_now-reference">
          click here
        </a>
      </h4>
    </div>
  );
};
