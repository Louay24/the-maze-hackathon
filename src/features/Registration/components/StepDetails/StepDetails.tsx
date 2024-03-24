export const StepDetails = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="step_details">
      <h1 className="step_details-title">{title}</h1>
      <p className="step_details-description">{description}</p>
    </div>
  );
};
