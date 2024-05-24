import React, {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import { FollowUsSection } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth, Md } from '../components/UIElements';
import { useStore } from '../appStore';
import Button from '@mui/material/Button';
import ImgurViewer from '../components/ImgurViewer';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';

const calcMaxRows = (clientHeight) => {
    return parseInt(clientHeight / 250);
}

const DynamicGallery = ({gallery, albums, maxRows, width}) => {
    const style = width ? { maxWidth: width - 40 + "px" } : { paddingRight: "20px", overflow: "auto"}
    return <div className="f1" style={style}>
        <div>
            <ImgurViewer images={gallery[albums.ashram.key]} maxRows={maxRows} rowHeight={250} sort={false}/>
        </div>
        <div style={{ textAlign: 'center', paddingTop: "15px"}}>
            <Link to={'/gallery'} style={{textDecoration: "none", color: "inherit"}}>
                <Button sx={{width: '100%'}} className="btn-primary" size="large" variant="contained" endIcon={<KeyboardDoubleArrowRightIcon />}>View Gallery</Button>
            </Link>
        </div>
    </div>
}

export const AshramSection = ({text, gallery, primaryImgs}) => {
    const { albums } = gallery;
    const textRef = useRef(null);
    const [width, setWidth] = useState(window.innerWidth);
    const { ashram } = primaryImgs
    
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
            if (!textRef.current) return
        };
        window.addEventListener('resize', handleResize);
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const smallScreen = width < 600
    const maxRows = smallScreen ? 2 : textRef.current ? calcMaxRows(textRef.current.clientHeight) : width >= 760 ? 4 : 6;
    // 6 is based on the text - needs to be changed if text changes. Effetcs only (600 to 760px screens)
    return <div style={{position: 'relative'}}>
        <div className="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src={ashram.src} alt={ashram.alt} style={{width: '100%'}}/></figure>
        </div>
        <div style={{padding: '40px 0px'}}>
            <Box className="card">
                <div className="d-flex">
                    {!smallScreen && <DynamicGallery gallery={gallery} albums={albums} maxRows={maxRows} />}
                    <Box ref={textRef} sx={{textAlign: 'left', flex: 1, height: "max-content", width: '100%'}}>
                        <SSADivider className='svg-divider dark-varient'/>
                        <div><Md>{text}</Md></div>
                        <SSADivider className='svg-divider dark-varient'/>
                    </Box>
                </div>
                {smallScreen && <DynamicGallery gallery={gallery} albums={albums} maxRows={2} width={width} />}
            </Box>
        </div>
    </div>
}

const AshramPage = () => {
    const [config, texts] = useStore(s => [s.config, s.texts])
    const { gallery, primaryImgs} = config
    const { headers } = texts
    return (
        <BoxFixedWidth>
            <h1>{headers.ashram}</h1>
            <AshramSection text={texts.ashram} gallery={gallery} primaryImgs={primaryImgs}/>
            <SSADivider />
            <h1>{headers.followUs}</h1>
            <FollowUsSection />
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default AshramPage;