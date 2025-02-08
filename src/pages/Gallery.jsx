import React, { useState } from 'react';
import GitImageViewer from '../components/GitImageViewer';
import { useStore } from '../appStore';
import { ToggleButtons } from '../components/ToggleButtons';
import { SSALogoIcon, ResponsiveElement, SSADivider, BoxFixedWidth, Md } from '../components/UIElements';
import { Typography } from '@mui/material';

const GalleryPage = () => {
    const [gallery, texts] = useStore(s => [s.config.gallery, s.texts])
    const { headers } = texts
    const { albums } = gallery;
    const [album, setAlbum] = useState(albums.guruji)
    return (
        <div>
            <h1>{headers.gallery}</h1>
                <BoxFixedWidth>
                <div className="card d-flex">
                    <ResponsiveElement 
                        mdEl={
                            <div style={{width: '130px', padding: '0px 20px'}}>
                                <SSALogoIcon />
                            </div>
                        }
                        smEl={<></>}
                    />
                    <div className="f1" style={{textAlign: 'left'}}>
                        <Md>{texts.gallery}</Md>
                    </div>
                </div>
                </BoxFixedWidth>
                <SSADivider />
                <div className='card v-center' style={{padding: "0px 10px", marginTop: '15px', borderRadius: "12px 12px 0px 0px"}}>
                    <Typography sx={{fontWeight: "bold", padding: "0px 15px"}}>{headers.albumSelect}</Typography>
                    <ToggleButtons label="SSA Albums" list={Object.values(albums)} selected={album.key} onChange={(userSelect) => setAlbum(albums[userSelect])} />
                </div>
                <GitImageViewer images={gallery[album.key]} path={album.path}/>
            <SSADivider />
        </div>
    );
};

export default GalleryPage;