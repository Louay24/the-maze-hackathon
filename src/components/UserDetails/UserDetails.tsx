import { TooltipText } from '../TooltipText';
import { BottomArrow } from 'src/assets/icons/BottomArrow/BottomArrow';
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { users } from 'src/constants/mockData';

export const UserDetails = () => {
  return (
    <div className="user_details">
      <UserAvatar size="large" user={users[0]} />
      <div className="user_details-info">
        <h3 className="user_details-info-name">
          <TooltipText text="Wahib Ben Marzouk" maxWidth={160} />
        </h3>
        <p className="user_details-info-position">
          <TooltipText text="UI/UX Designer" maxWidth={160} />
        </p>
      </div>
      <BottomArrow />
    </div>
  );
};
