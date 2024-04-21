import { useState } from 'react';
import HelpIcon from './assets/question.png';
import SignOutIcon from './assets/log-out.png';
import SettingsIcon from './assets/settings.png';
import UserIcon from './assets/user.png';
export default function C114() {
  const [menuActive, setMenuActive] = useState(false);

  const menuToggle = () => {
    setMenuActive(!menuActive);
  };

  return (
    <div className="action">
      <div className="profile" onClick={menuToggle}>
        <img
          src="https://avatars.githubusercontent.com/u/115119476?v=4"
          alt="Avatar"
        />
      </div>
      <div className={`menu ${menuActive ? 'active' : ''}`}>
        <h3>
          Youssef zekri
          <br />
          <span>Web developer</span>
        </h3>
        <ul>
          <li>
            <img src={UserIcon} alt="User Icon" />
            <a href="#">My profile</a>
          </li>
          <li>
            <img src={SettingsIcon} alt="Settings Icon" />
            <a href="#">Setting</a>
          </li>
          <li>
            <img src={HelpIcon} alt="Question Icon" />
            <a href="#">Help</a>
          </li>
          <li>
            <img src={SignOutIcon} alt="Logout Icon" />
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
