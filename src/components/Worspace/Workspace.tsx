import { Avatar } from 'antd';

export const Workspace = ({
  onlyIcon = false,
  src,
  title,
}: {
  onlyIcon?: boolean;
  src: string;
  title: string;
}) => {
  return (
    <div className="workspace_container">
      <Avatar src={src} shape="square" />
      {!onlyIcon && <h3 className="workspace_container-title">{title}</h3>}
    </div>
  );
};
