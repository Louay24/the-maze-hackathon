import { FilterIcon } from 'src/assets/icons/FilterIcon/FilterIcon';
import { SearchIcon } from 'src/assets/icons/SearchIcon/SearchIcon';
import { IconBox } from 'src/components/IconBox/IconBox';
import { Input } from 'src/components/Input/Input';
import { Space } from 'src/components/Space/Space';
import { useLanguage } from 'src/providers/translation/LanguageContext';

export const SpacesFeature = () => {
  const { t } = useLanguage();
  const users = [
    'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/323422332_5899807886777410_2397261787470949884_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gCwLfbDUbJcAb6WJVVa&_nc_oc=AdglzoGLD_CM1URg7vOu5cSQ6vG9QfRbFIFZFtZ6V887gF1XTay1fzp8HN3jtb04qZw&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBFcme5nO6A0p6g4j9HjdKecqFNDEDHzJks4AFuNvQ-Cg&oe=6616AD54',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/323422332_5899807886777410_2397261787470949884_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gCwLfbDUbJcAb6WJVVa&_nc_oc=AdglzoGLD_CM1URg7vOu5cSQ6vG9QfRbFIFZFtZ6V887gF1XTay1fzp8HN3jtb04qZw&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBFcme5nO6A0p6g4j9HjdKecqFNDEDHzJks4AFuNvQ-Cg&oe=6616AD54',
    'https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/323422332_5899807886777410_2397261787470949884_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gCwLfbDUbJcAb6WJVVa&_nc_oc=AdglzoGLD_CM1URg7vOu5cSQ6vG9QfRbFIFZFtZ6V887gF1XTay1fzp8HN3jtb04qZw&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBFcme5nO6A0p6g4j9HjdKecqFNDEDHzJks4AFuNvQ-Cg&oe=6616AD54',
    '	https://scontent.ftun16-1.fna.fbcdn.net/v/t39.30808-1/323422332_5899807886777410_2397261787470949884_n.jpg?stp=cp6_dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gCwLfbDUbJcAb6WJVVa&_nc_oc=AdglzoGLD_CM1URg7vOu5cSQ6vG9QfRbFIFZFtZ6V887gF1XTay1fzp8HN3jtb04qZw&_nc_ht=scontent.ftun16-1.fna&oh=00_AfBFcme5nO6A0p6g4j9HjdKecqFNDEDHzJks4AFuNvQ-Cg&oe=6616AD54',
  ];
  return (
    <div className="spaces">
      <div className="spaces_toolbar">
        <Input
          className="navbar_search"
          prefix={<SearchIcon />}
          placeholder={t('search-for-something')}
        />
        <IconBox icon={<FilterIcon />} />
      </div>
      <Space
        users={users}
        createdAt="created yesterday 01 : 00 AM"
        name="Space UI/UX"
        image="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </div>
  );
};
