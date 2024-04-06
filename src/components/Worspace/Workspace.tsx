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
      <Avatar
        src="https://i.pinimg.com/736x/c6/b1/a5/c6b1a521776dc85f9eaac5194254e3c7.jpg"
        shape="square"
      />
      {!onlyIcon && (
        <h3 className="workspace_container-title">Wayzello’s workspace</h3>
      )}
    </div>
  );
};
