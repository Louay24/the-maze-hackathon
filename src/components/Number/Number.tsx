export const Number = ({
  content,
  color,
}: {
  content: string;
  color: 'red' | 'blue';
}) => {
  return (
    <div className={`number_container ${color}`}>
      <h1 className={`number_container-content`}>{content}</h1>
    </div>
  );
};
