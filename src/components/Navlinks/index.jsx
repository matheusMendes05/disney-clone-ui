import './styles.css';
import StartIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TheatersIcon from '@material-ui/icons/Theaters';

export const Navlinks = () => {
  return (
    <ul className="flex items-center ml-20 navlist">
      <li className="mr-6">
        <a href="#">
          <span>
            <HomeIcon className="icons" />
          </span>
          home
        </a>
      </li>
      <li className="mr-6">
        <a href="#">
          <span>
            <SearchIcon className="icons" />
          </span>
          search
        </a>
      </li>
      <li className="mr-6">
        <a href="#">
          <span>
            <AddIcon className="icons" />
          </span>
          details
        </a>
      </li>
      <li className="mr-6">
        <a href="#">
          <span>
            <StartIcon className="icons" />
          </span>
          originals
        </a>
      </li>
      <li className="mr-6">
        <a href="#">
          <span>
            <TheatersIcon className="icons" />
          </span>
          movies
        </a>
      </li>
      <li className="mr-6">
        <a href="#">
          <span>
            <LiveTvIcon className="icons" />
          </span>
          series
        </a>
      </li>
    </ul>
  );
};
