import { Button, Input, Progress } from 'antd';
import { ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LeftArrow } from 'src/assets/icons/LeftArrow/LeftArrow';

export const WorkSpaceConfig = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const progress: {
    [key: number]: number;
  } = {
    1: 20,
    2: 40,
    3: 60,
    4: 80,
    5: 100,
  };
  const step = Number(pathname.split('/')[pathname.split('/').length - 1]);
  const nextRoute = `${pathname}/${step + 1}`;
  return (
    <div className="workspace_config-container fcc">
      <div className="workspace_config-layout">
        <div className="workspace_config-head">
          <Button
            className="workspace_config-head-back"
            onClick={() => navigate(-1)}
            type="link"
          >
            <LeftArrow />
          </Button>
          <Progress percent={progress[step]} showInfo={false} />
        </div>
        <div className="get_started-body">
          <div>{children}</div>
          <div className="get_started-navigation">
            {step < 5 && (
              <Button
                onClick={() =>
                  step === 1 ? navigate(-1) : navigate(nextRoute)
                }
                className="get_started-navigation-back"
                type="link"
              >
                {step === 1 ? 'Back' : 'Skip'}
              </Button>
            )}
            <Button
              onClick={() => navigate(nextRoute)}
              className="get_started-navigation-next fcc"
              type="primary"
            >
              {step === 5 ? 'Finish' : 'Next'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
