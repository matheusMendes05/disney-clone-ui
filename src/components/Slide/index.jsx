import './styles.css';
import { Carousel } from 'flowbite-react/lib/esm/components/Carousel';

export const Slide = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mt-2">
      <Carousel slideInterval={5000}>
        <div className="flex h-full items-center justify-center">
          <img
            src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/07/Vingadores-Guerra-Infinita-e-Ultimato.jpg"
            alt=""
            srcSet=""
            className="img-carousel"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <img
            src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/08/Walt-Disney-Studios-Logo.jpg"
            alt=""
            srcSet=""
            className="img-carousel"
          />
        </div>
        <div className="flex h-full items-center justify-center">
          <img
            src="https://disneyplusbrasil.com.br/wp-content/uploads/2022/12/Especial-Avatar-2-Disney-Plus.jpg"
            alt=""
            srcSet=""
            className="img-carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};
