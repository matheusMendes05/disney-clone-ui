import './styles.css';
import { LogoLink } from '../LogoLink';
import Logo from '../../assets/images/disney-plus.svg';
import { Navlinks } from '../Navlinks';
import { Button } from '../Button';

export const Heading = () => {
  return (
    <header>
      <nav className="justify-between flex items-center">
        <div className="flex nav-contend mr-4">
          <LogoLink url={Logo} />
          <Navlinks />
        </div>

        <div className="login-button">
          <Button text={'Login'} />
        </div>
      </nav>
    </header>
  );
};
