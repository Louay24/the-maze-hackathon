import { AddFriendIcon } from 'src/assets/icons/AddFriendIcon/AddFriendIcon';
import { NotificationIcon } from 'src/assets/icons/NotificationIcon/NotificationIcon';
import { SearchIcon } from 'src/assets/icons/SearchIcon/SearchIcon';
import { IconBox } from 'src/components/IconBox/IconBox';
import { Input } from 'src/components/Input/Input';
import { UserDetails } from 'src/components/UserDetails/UserDetails';
import { useLanguage } from 'src/providers/translation/LanguageContext';

export const Navbar = () => {
  const { t } = useLanguage();
  return (
    <div className="navbar">
      <Input
        className="navbar_search"
        prefix={<SearchIcon />}
        placeholder={t('search-for-something')}
      />
      <div className="navbar_right">
        <IconBox icon={<AddFriendIcon />} />
        <IconBox icon={<NotificationIcon />} />
        <IconBox icon={<UserDetails />} />
      </div>
    </div>
  );
};
