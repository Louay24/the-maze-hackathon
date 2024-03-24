import { Input } from 'src/components/Input/Input';
import { StepDetails } from '../../components/StepDetails/StepDetails';

export const Step1 = () => {
  return (
    <div className="fjc dir-col ">
      <StepDetails
        title="Create your first workspace"
        description="Your first workspace needs a name"
      />
      <Input />
    </div>
  );
};
