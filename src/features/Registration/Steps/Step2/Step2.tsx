import { Upload } from 'antd';
import { StepDetails } from '../../components/StepDetails/StepDetails';

export const Step2 = () => {
  return (
    <div>
      <StepDetails
        title="Personnalize your workspace "
        description="Upload a photo to personalize your workspace"
      />
      <Upload></Upload>
    </div>
  );
};
