import { Image, Item } from './ImageGalleryItem.styled';
import { ImageModal } from 'components/Modal/Modal';
import { LageImage } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  id,
  img: { webformatURL, largeImageURL, tags },
}) => {
  const [lageImage, setLageImage] = useState(null);

  const showLageImage = () => {
    lageImage ? setLageImage(null) : setLageImage(largeImageURL);
  };

  return (
    <Item key={id} onClick={showLageImage}>
      <Image src={webformatURL} alt={tags} />
      <ImageModal
        isOpen={Boolean(lageImage)}
        onClose={() => setLageImage(null)}
      >
        <LageImage src={lageImage} alt="lageImage" />
      </ImageModal>
    </Item>
  );
};
