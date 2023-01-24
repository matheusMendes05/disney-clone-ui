import './styles.css';
import StartIcon from '@material-ui/icons/Star';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import TheatersIcon from '@material-ui/icons/Theaters';

export const Navlinks = () => {
  return (
    <ul className="flex items-center ml-20">
      <li className="mr-8">
        <a href="#">
          <span>
            <HomeIcon />
          </span>
          home
        </a>
      </li>
      <li className="mr-8">
        <a href="#">
          <span>
            <SearchIcon />
          </span>
          search
        </a>
      </li>
      <li className="mr-8">
        <a href="#">
          <span>
            <AddIcon />
          </span>
          details
        </a>
      </li>
      <li className="mr-8">
        <a href="#">
          <span>
            <StartIcon />
          </span>
          originals
        </a>
      </li>
      <li className="mr-8">
        <a href="#">
          <span>
            <TheatersIcon />
          </span>
          movies
        </a>
      </li>
      <li className="mr-8">
        <a href="#">
          <span>
            <LiveTvIcon />
          </span>
          series
        </a>
      </li>
    </ul>
  );
};
