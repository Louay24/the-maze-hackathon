import { Input as AntdInput, InputProps } from 'antd';
export const Input = ({
  className = '',
  size = 'large',
  ...props
}: InputProps) => {
  return (
    <AntdInput
      size={size}
      className={`antd_input ${className}`}
      bordered={false}
      {...props}
    />
  );
};
