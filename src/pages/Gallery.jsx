import React from 'react';
import Gallery from '../components/Gallery';
import { useStore } from '../appStore';

const GalleryPage = () => {
    const [gallery] = useStore(s => [s.config.gallery])
    return (
        <div>
            <h1>Welcome to Gallery!</h1>
            <Gallery gallery={gallery}/>
        </div>
    );
};

export default GalleryPage;