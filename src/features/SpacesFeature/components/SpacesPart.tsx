import { Space } from 'src/components/Space/Space';
import { spaces, users } from 'src/constants/mockData';
import { useLanguage } from 'src/providers/translation/LanguageContext';

const SpacesPart = () => {
  return (
    <div className="spaces_container">
      {spaces.map((space) => (
        <Space
          users={space.users}
          createdAt={space.createdAt}
          name={space.name}
          image={space.image}
        />
      ))}
    </div>
  );
};

export default SpacesPart;
