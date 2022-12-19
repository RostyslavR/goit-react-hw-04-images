import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  return (
    <Gallery>
      {images.map(({ id, ...others }) => (
        <ImageGalleryItem key={id} img={others} />
      ))}
    </Gallery>
  );
};
