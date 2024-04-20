import { OutlinedStatus } from '../OutlinedStatus/OutlinedStatus';

export const RemainingTasks = ({
  status,
  numberOfTasks,
}: {
  status: 'todo' | 'completed' | 'inprogress';
  numberOfTasks: number;
}) => {
  const phrase = `${numberOfTasks} ${'tasks'} ${
    status === 'todo'
      ? 'to do'
      : status === 'completed'
      ? 'complete'
      : status === 'inprogress'
      ? 'in progress'
      : ''
  }`;
  return (
    <div className="remaining_tasks">
      <OutlinedStatus status={status} />
      <p className={`remaining_tasks-phrase ${status}`}>{phrase}</p>
    </div>
  );
};
