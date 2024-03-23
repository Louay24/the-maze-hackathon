import { ReactNode } from 'react';
import { AuthContainer } from 'src/features/Auth/AuthContainer/AuthContainer';
export interface AuthLayout {
  children: ReactNode;
}
export const AuthLayout = ({ children }: AuthLayout) => {
  return <AuthContainer>{children}</AuthContainer>;
};
