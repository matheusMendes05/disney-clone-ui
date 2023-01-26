import './styles.css';
import { Heading } from '../../components/Heading';
import { TMDBProvider } from '../../context/TMDBContext';
import { Slide } from '../../components/Slide';
function Home() {
  return (
    <div className="home">
      <TMDBProvider>
        <Heading />
        <Slide />
      </TMDBProvider>
    </div>
  );
}

export default Home;
