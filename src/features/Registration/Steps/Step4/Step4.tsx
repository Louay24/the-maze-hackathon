import { RadioButtons } from 'src/components/RadioButtons/RadioButtons';
import { StepDetails } from '../../components/StepDetails/StepDetails';
const items = [
  { value: 'Personal productivity', label: 'Personal productivity' },
  { value: 'IT', label: 'IT' },
  { value: 'Design', label: 'Design' },
  { value: 'Marketing & advertising', label: 'Marketing & advertising' },
  { value: 'Education', label: 'Education' },
  { value: 'E-commerce', label: 'E-commerce' },
  { value: 'Engineering', label: 'Engineering' },
  { value: 'Other', label: 'Other' },
];
export const Step4 = () => {
  return (
    <div className="step_radio-container">
      <StepDetails
        title="Choose your work field"
        description="Choose the field where you will use infinity bug"
      />
      <RadioButtons
        onChange={(value) => {
          console.log(value);
        }}
        items={items}
      />
    </div>
  );
};
