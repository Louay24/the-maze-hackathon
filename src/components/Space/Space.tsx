import { Avatar, Image, Tooltip } from 'antd';
import { CreatedDate } from '../CreatedDate/CreatedDate';
import { OutlinedStatus } from '../OutlinedStatus/OutlinedStatus';
import { RemainingTasks } from '../RemainingTasks/RemainingTasks';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import dayjs from 'dayjs';

export const Space = ({
  image,
  createdAt,
  name,
  users,
}: {
  image?: string;
  createdAt: string;
  name: string;
  users?: { avatar?: string; fullName?: string }[];
}) => {
  const numberOfUsersDisplayed = 3;
  return (
    <div className="space">
      {image && <Image className="space_image" width={96} src={image} />}
      <div className="space-informations">
        <CreatedDate text={dayjs(createdAt).format('DD/MM/YYYY')} />
        <h3 className="space_name">{name}</h3>
        <div className="fcc g-1">
          <RemainingTasks status="todo" numberOfTasks={8} />
          <RemainingTasks status="inprogress" numberOfTasks={7} />
          <RemainingTasks status="completed" numberOfTasks={4} />
        </div>
        <Avatar.Group size={'small'} maxCount={numberOfUsersDisplayed}>
          {users?.map((user) => (
            <UserAvatar size="small" user={user} />
          ))}
        </Avatar.Group>
      </div>
    </div>
  );
};
