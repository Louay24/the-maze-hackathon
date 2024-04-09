import { Avatar, AvatarProps } from 'antd';
interface UserAvatarProps extends AvatarProps {
  user: {
    fullName?: string;
    avatar?: string;
  };
}

export const UserAvatar = ({ user, ...props }: UserAvatarProps) => {
  return !user.avatar && user.fullName ? (
    <Avatar
      style={{
        ...UserAvatarColors[
          Math.floor(Math.random() * UserAvatarColors.length)
        ],
      }}
      className="user_avatar-without-image"
      {...props}
    >
      {user?.fullName?.split(' ').map((word) => word.charAt(0))}
    </Avatar>
  ) : (
    <Avatar {...props} src={user.avatar} />
  );
};
const UserAvatarColors = [
  { background: '#F9E4CB', color: '#80430A' },
  { background: '#EACBF9', color: '#5A0A80' },
];
