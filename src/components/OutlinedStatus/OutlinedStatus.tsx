export const OutlinedStatus = ({
  status,
}: {
  status: 'todo' | 'completed' | 'inprogress';
}) => {
  return <div className={`outline_status ${status}`}></div>;
};
