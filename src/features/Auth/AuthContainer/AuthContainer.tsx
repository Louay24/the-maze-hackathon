import { AuthLayout } from 'src/pages/AuthLayout';
type AuthContainer = AuthLayout;
export const AuthContainer = ({ children }: AuthContainer) => {
  return <div className="auth_container">{children}</div>;
};
