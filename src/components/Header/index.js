import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import './styles.css';

export function Header() {
  return (
    <header className="headerContainer">
      <img src="https://do4b37tjl3zwc.cloudfront.net/alltax-site/assets/AllTax_white_logo.png" alt="AllTax Platform" className="imgFilter" />

      <p>Sales Report</p>

      <span>
        Username
        <FontAwesomeIcon icon={faBars} className="icon" size="lg" />
      </span>
    </header>
  );
}