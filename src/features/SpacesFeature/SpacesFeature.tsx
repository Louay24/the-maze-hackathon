import SpacesPart from './components/SpacesPart';
import { SpacesHeader } from './components/SpacesHeader/SpacesHeader';
import { Activity } from 'src/components/Activity/Activity';
import { Divider } from 'antd';
import { spaces } from 'src/constants/mockData';

export const SpacesFeature = () => {
  return (
    <div className="spaces">
      <SpacesHeader />
      <div className="spaces_content">
        <SpacesPart />
        <Divider type="vertical" />
        <Activity />
      </div>
    </div>
  );
};
