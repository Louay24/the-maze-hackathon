import { Avatar } from 'antd';
import { TooltipText } from '../TooltipText';
import { BottomArrow } from 'src/assets/icons/BottomArrow/BottomArrow';

export const UserDetails = () => {
  return (
    <div className="user_details">
      <Avatar
        size="large"
        src="https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/323422332_5899807886777410_2397261787470949884_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gCwLfbDUbJcAb6WJVVa&_nc_oc=AdglzoGLD_CM1URg7vOu5cSQ6vG9QfRbFIFZFtZ6V887gF1XTay1fzp8HN3jtb04qZw&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBFcme5nO6A0p6g4j9HjdKecqFNDEDHzJks4AFuNvQ-Cg&oe=6616AD54"
      />
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
