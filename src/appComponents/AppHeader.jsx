import React from 'react';
import Header from '../components/Header';
import { useStore } from '../appStore';

const GalleryPage = () => {
    const [pages, primaryInfo ] = useStore(s => [s.pages, s.config.primaryInfo])
    return (
        <Header pages={pages} primaryInfo={primaryInfo}/>
    );
};

export default GalleryPage;