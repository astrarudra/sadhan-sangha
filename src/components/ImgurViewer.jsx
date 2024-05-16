import { useState } from 'react';
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const BASE = 'https://i.imgur.com/'

const formatImages = (imgurUUIDs) => {
    const images = imgurUUIDs.map(img => {
        const {i , h:height , w: width} = img
        const [key, ext] = i.split('.')
        const src = `${BASE}${key}l.${ext}` // thumbnail
        const original = `${BASE}${i}`
        return { src, original, height, width }
    }).sort((a, b) => a.height - b.height);
    return images;
}

const ImgurViewer = ({images: imgurUUIDs}) => {
    const images = formatImages(imgurUUIDs);
    const [index, setIndex] = useState(-1);

    const currentImage = images[index];
    const nextIndex = (index + 1) % images.length;
    const nextImage = images[nextIndex] || currentImage;
    const prevIndex = (index + images.length - 1) % images.length;
    const prevImage = images[prevIndex] || currentImage;
  
    const handleClick = (index, item) => setIndex(index);
    const handleClose = () => setIndex(-1);
    const handleMovePrev = () => setIndex(prevIndex);
    const handleMoveNext = () => setIndex(nextIndex);

    return <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
        rowHeight={300}
      />
      {!!currentImage && (
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
}

export default ImgurViewer;