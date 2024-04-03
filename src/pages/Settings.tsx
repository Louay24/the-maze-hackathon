import underConstruction from 'src/assets/icons/UnderConstruction.svg';

export const Settings = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}
    >
      <img
        style={{ width: '70%' }}
        src={underConstruction}
        alt="underConstruction"
      />
    </div>
  );
};
