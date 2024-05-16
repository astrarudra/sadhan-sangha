import React from 'react';
import Header from '../components/Header';
import { useStore } from '../appStore';

const GalleryPage = () => {
    const [pages] = useStore(s => [s.pages])
    return (
        <Header pages={pages}/>
    );
};

export default GalleryPage;