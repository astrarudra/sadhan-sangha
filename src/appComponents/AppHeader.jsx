import React from 'react';
import Header from '../components/Header';
import { useStore } from '../appStore';

const GalleryPage = () => {
    const [pages, texts ] = useStore(s => [s.pages, s.texts])
    return (
        <Header pages={pages} texts={texts}/>
    );
};

export default GalleryPage;