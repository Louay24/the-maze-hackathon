export const Logo = ({ type }: { type?: 'primary' | 'secondary' }) => {
  return (
    <div className="logo">
      <div className={`logo_circle ${type ?? ''}`}></div>
      <h1 className={`logo_title grotesk ${type ?? ''}`}>Wayzello</h1>
    </div>
  );
};
