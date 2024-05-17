import React, { useState } from 'react';
import ImgurViewer from '../components/ImgurViewer';
import { useStore } from '../appStore';
import { ToggleButtons } from '../components/ToggleButtons';
import { SSALogoIcon, ResponsiveElement, SSADivider, BoxFixedWidth } from '../components/UIElements';
import { Typography } from '@mui/material';

const GalleryPage = () => {
    const [gallery] = useStore(s => [s.config.gallery])
    const { albums } = gallery;
    const [album, setAlbum] = useState(albums.guruji)
    return (
        <div>
            <h1>The Gallery</h1>
                <BoxFixedWidth>
                <div className="card d-flex" style={{margin: "0px 20px"}}>
                    <ResponsiveElement 
                        mdEl={
                            <div style={{width: '130px', padding: '0px 20px'}}>
                                <SSALogoIcon />
                            </div>
                        }
                        smEl={<></>}
                    />
                    <div className="f1" style={{textAlign: 'left'}}>
                        Welcome to the Gallery page of Sadhan Sangha Ashram, a treasure trove of captured moments and divine memories. Explore our collection of photographs featuring Guruji and the serene landscapes of our Ashram, all lovingly clicked by devoted souls like you. Each image is a testament to the sacred journey we share together on the path of spirituality and inner awakening. Your feedback matters to us; if you believe an image should be removed, kindly drop us an email.<br /><br />
                        Select an album below to immerse yourself in the beauty and serenity of Sadhan Sangha Ashram.
                    </div>
                </div>
                </BoxFixedWidth>
                <SSADivider />
                <div className='card v-center' style={{padding: "0px 10px", marginTop: '15px', borderRadius: "12px 12px 0px 0px"}}>
                    <Typography sx={{fontWeight: "bold", padding: "0px 15px"}}>Select Album</Typography>
                    <ToggleButtons label="SSA Albums" list={Object.values(albums)} selected={album.key} onChange={(userSelect) => setAlbum(albums[userSelect])} />
                </div>
                <ImgurViewer images={gallery[album.key]}/>
            <SSADivider />
        </div>
    );
};

export default GalleryPage;