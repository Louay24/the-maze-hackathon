import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { PATHS } from 'src/constants/paths';

export const WorkSpaceConfig = () => {
  const navigate = useNavigate();
  return (
    <div className="workspace_config-container">
      <div className="workspace_config-layout">
        <div className="get_started-body">
          <div className="get_started-navigation">
            <Button
              onClick={() => navigate(-1)}
              className="get_started-navigation-back "
              type="link"
            >
              Back
            </Button>
            <Button
              onClick={() => navigate(PATHS.WorkSpaceConfig)}
              className="get_started-navigation-next"
              type="primary"
            >
              Yes Absolutely !{<RightArrow />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
