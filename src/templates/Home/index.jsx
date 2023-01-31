import './styles.css';
import { Heading } from '../../components/Heading';
import { TMDBProvider } from '../../context/TMDBContext';
import { Slide } from '../../components/Slide';
import { RowContent } from '../../components/RowContent';
import { HighlightsCard } from '../../components/HighlightsCard';
function Home() {
  return (
    <div className="home">
      <TMDBProvider>
        <Heading />
        <RowContent>
          <HighlightsCard />
        </RowContent>
      </TMDBProvider>
    </div>
  );
}

export default Home;
