import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const BASE = 'https://i.imgur.com/'
const IMAGE_COMPO_HEIGHT = 'calc(100vh - 200px)'

// Custom render function to apply styles to images

const renderCustomImage = (item) => {
    console.log(item)
    return (
      <div className="image-gallery-image" style={{ height: IMAGE_COMPO_HEIGHT}}>
        <img 
          className="image-height-restrict"
          src={item.original} 
          alt={item.description} 
          style={{ objectFit: 'scale-down', width: '100%'}} // Set objectFit to cover and width/height to 100%
        />
      </div>
    );
  }

const Gallery = ({gallery}) => {
    const { albums } = gallery;
    const selectedAlbum = albums[0];
    const images = gallery[selectedAlbum.key].map(url => {
        const [key, ext] = url.split('.')
        const thumbnail = `${BASE}${key}l.${ext}`
        const original = `${BASE}${url}`
        return { original, thumbnail }
    });
    return <div style={{ height: IMAGE_COMPO_HEIGHT }}>
        <ImageGallery 
        items={images}
        lazyLoad={true}
        thumbnailPosition="right"
        renderItem={renderCustomImage}
    />;
    </div>
}

export default Gallery;