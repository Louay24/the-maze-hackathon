import { Button as AntdButton } from 'antd';
import type { ButtonProps } from 'antd/lib/button';
import { ReactNode } from 'react';
interface Button extends ButtonProps {
  title?: string;
  children?: ReactNode;
}
export const Button = ({ title, children, ...props }: Button) => {
  return (
    <AntdButton title={title} {...props}>
      {children && children}
    </AntdButton>
  );
};
