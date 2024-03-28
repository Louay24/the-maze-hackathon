import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo } from 'src/assets/icons/Logo/logo';
import people from 'src/assets/images/people.png';
import { PATHS } from 'src/constants/paths';
export const GetStartedLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const picCondition = pathname === PATHS.StartNow || pathname === PATHS.Root;
  return (
    <div className="get_started-layout fcc">
      <div className="get_started">
        <div className="get_started-contenu">
          <Logo />
          {children}
        </div>
        {picCondition && (
          <img src={people} alt="people meeting" className="get_started-pic" />
        )}
      </div>
    </div>
  );
};
