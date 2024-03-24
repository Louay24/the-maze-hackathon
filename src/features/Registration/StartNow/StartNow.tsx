import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { Button } from 'src/components/Button/Button';
import { PATHS } from 'src/constants/paths';

export const StartNow = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="get_started-navigation">
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
    </div>
  );
};
