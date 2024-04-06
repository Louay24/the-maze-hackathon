import { Avatar, Image, Tooltip } from 'antd';
import { CreatedDate } from '../CreatedDate/CreatedDate';
import { OutlinedStatus } from '../OutlinedStatus/OutlinedStatus';
import { RemainingTasks } from '../RemainingTasks/RemainingTasks';

export const Space = ({
  image,
  createdAt,
  name,
  users,
}: {
  image?: string;
  createdAt: string;
  name: string;
  users?: string[];
}) => {
  const numberOfUsersDisplayed = 3;
  const displayedUsers = users?.slice(0, numberOfUsersDisplayed);
  const restUsers = users
    ?.slice(numberOfUsersDisplayed)
    ?.map((user) => <Avatar size="small" src={user} />);
  return (
    <div className="space">
      {image && <Image className="space_image" width={96} src={image} />}
      <div className="space-informations">
        <CreatedDate text={createdAt} />
        <h3 className="space_name">{name}</h3>
        <div className="fcc g-1">
          <RemainingTasks status="todo" numberOfTasks={8} />
          <RemainingTasks status="inprogress" numberOfTasks={7} />
          <RemainingTasks status="completed" numberOfTasks={4} />
        </div>
        {users && (
          <Avatar.Group>
            {displayedUsers?.map((user) => (
              <Avatar size="small" src={user} />
            ))}
            {users.length > numberOfUsersDisplayed && (
              <Tooltip title={restUsers} placement="top">
                <Avatar
                  size="small"
                  className="space_rest-users"
                  icon={<>+5</>}
                />
              </Tooltip>
            )}
          </Avatar.Group>
        )}
      </div>
    </div>
  );
};
