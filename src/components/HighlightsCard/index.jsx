import './styles.css';
import contentDisney from '../../utils/TMDB/api';

export const HighlightsCard = () => {
  return (
    <section className="cards">
      {contentDisney.map((image) => (
        <div key={image.id} className="card-body">
          <div className="card-contend">
            <img src={image.src} alt={image.name} />
          </div>
        </div>
      ))}
    </section>
  );
};
