import { Input } from 'src/components/Input/Input';
import { StepDetails } from '../../components/StepDetails/StepDetails';

export const Step1 = () => {
  return (
    <div className="step-1 fjc dir-col g-1 ">
      <StepDetails
        title="Create your first workspace"
        description="Your first workspace needs a name"
      />
      <Input size="large" placeholder="enter your workspace name here" />
    </div>
  );
};
