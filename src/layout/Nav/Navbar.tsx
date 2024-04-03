import { SearchIcon } from 'src/assets/icons/SearchIcon/SearchIcon';
import { Input } from 'src/components/Input/Input';

export const Navbar = () => {
  return (
    <div className="navbar">
      <Input
        className="navbar_search"
        prefix={<SearchIcon />}
        placeholder="search for something"
      />
      <div className="navbar_search">
        <div className="navbar_search-icon">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};
