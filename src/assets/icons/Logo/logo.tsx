import { Link } from 'react-router-dom';
import { Paths } from 'src/constants/paths';

export const Logo = ({
  title = true,
  type,
}: {
  title?: boolean;
  type?: 'primary' | 'secondary';
}) => {
  return (
    <Link to={Paths.Root}>
      <div className="logo">
        <div className={`logo_circle ${type ?? ''}`}></div>
        {title && (
          <h1 className={`logo_title grotesk ${type ?? ''}`}>Wayzello</h1>
        )}
      </div>
    </Link>
  );
};
