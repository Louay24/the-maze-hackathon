import { ReactNode } from 'react';
import { Logo } from 'src/assets/icons/Logo/logo';

export const GetStartedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="get_started">
      <Logo />
      {children}
    </div>
  );
};
