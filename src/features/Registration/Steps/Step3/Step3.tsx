import { RadioButtons } from 'src/components/RadioButtons/RadioButtons';
import { StepDetails } from '../../components/StepDetails/StepDetails';
const items = [
  { value: 'Only me', label: 'Only me' },
  { value: '2-10', label: '2-10' },
  { value: '11-30', label: '11-30' },
  { value: '61-100', label: '61-100' },
  { value: '101-200', label: '101-200' },
  { value: '+200', label: '+200' },
  { value: "I don't know", label: "I don't know" },
];
export const Step3 = () => {
  return (
    <div className="step_radio-container">
      <StepDetails
        title="Choose your workspace capacity"
        description="Specify the number of individuals who will be included in this workspace"
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
