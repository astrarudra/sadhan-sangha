import React, {useEffect, useState, useRef} from 'react';
import Box from '@mui/material/Box';
import { FollowUsSection } from '../components/HomeSections'
import { SSADivider, BoxFixedWidth } from '../components/UIElements';
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

export const AshramSection = () => {
    const [gallery] = useStore(s => [s.config.gallery])
    const { albums } = gallery;
    const textRef = useRef(null);
    const [width, setWidth] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWidth(window.innerWidth)
        if (!textRef.current) return
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize',handleResize);
      };
    }, []);

    const smallScreen = width < 600
    const maxRows = smallScreen ? 2 : textRef.current ? calcMaxRows(textRef.current.clientHeight) : 2

    return <div style={{position: 'relative'}}>
        <div class="hover01 column" style={{display: "flex", justifyContent: "center"}}>
            <figure><img src="https://i.imgur.com/0fOBbqh.jpg" alt="Ashram" style={{width: '100%'}}/></figure>
        </div>
        <div style={{padding: '40px 0px'}}>
            <Box className="card">
                <div className="d-flex">
                    {!smallScreen && <DynamicGallery gallery={gallery} albums={albums} maxRows={maxRows} />}
                    <Box ref={textRef} sx={{textAlign: 'left', flex: 1, height: "max-content", width: '100%'}}>
                        <SSADivider className='svg-divider dark-varient'/>
                        <div>
                            <b>Discover Divine Insights at Sadhan Sangha Ashram</b><br />
                            <br />
                            Welcome to Sadhan Sangha Ashram, a sanctuary where spiritual wisdom and tranquility converge. Nestled between the sacred towns of Rishikesh and Haridwar, our Ashram offers a serene environment for seekers to immerse themselves in the teachings of Yogi 108 Swami Sachchidananda Saraswati.<br />
                            <br />
                            <b>Our Journey</b><br />
                            <br />
                            In 1970, the revered Swami Sachchidananda Saraswati embarked on a pilgrimage through North India. Enchanted by the celestial beauty of the region between Haridwar and Rishikesh, he felt a profound connection to the divine essence, envisioning it as the abode of Lord Shiva. Inspired by this divine encounter, he resolved to establish Sadhan Sangha Ashram near the Virbhadra railway station, with the support of his devoted disciples, Choudhury Saheb and Kapoor Saheb.<br />
                            <br />
                            <b>Humble Beginnings</b><br />
                            <br />
                            The Ashram's journey began in 1979 with a humble cottage and a solitary well. Over the years, with unwavering dedication and divine grace, the Ashram has blossomed into a sanctuary of spiritual nourishment and inner peace. In 1984, a significant milestone was achieved with the consecration of the Mandir within the Ashram. The unveiling of Guruji's statue on November 2nd symbolized the eternal presence of wisdom and enlightenment within these hallowed grounds.<br />
                            <br />
                            <b>Satsangs and Teachings</b><br />
                            <br />
                            At Sadhan Sangha Ashram, the transformative power of satsangs forms the core of our spiritual practice. Guruji's luminous teachings illuminate the path to enlightenment, guiding seekers toward self-discovery and inner awakening. Each satsang is an opportunity to delve deep into the ocean of spiritual wisdom, offering profound insights that resonate with the soul.<br />
                            <br />
                            <b>A Haven for Seekers</b><br />
                            <br />
                            Today, under the guidance of the present Guruji, Sadhan Sangha Ashram continues to illuminate the path of seekers from all walks of life. Whether you seek refuge, wisdom, or solace amidst the chaos of life, our Ashram provides a haven for spiritual growth and self-discovery. The gates of Sadhan Sangha Ashram stand open, welcoming all who yearn for the serenity of the soul.<br />
                            <br />
                            <b>Join Us</b><br />
                            <br />
                            We invite you to join us on this sacred journey. Explore our offerings of daily satsangs, enlightening discourses, and soul-stirring bhajans. Let the serenity and spiritual wisdom of Sadhan Sangha Ashram illuminate your path to inner peace and enlightenment.<br />
                            <br />
                        </div>
                        <SSADivider className='svg-divider dark-varient'/>
                    </Box>
                </div>
                {smallScreen && <DynamicGallery gallery={gallery} albums={albums} maxRows={2} width={width} />}
            </Box>
        </div>
    </div>
}

const AshramPage = () => {
    return (
        <BoxFixedWidth>
            <h1>The Ashram</h1>
            <AshramSection />
            <SSADivider />
            <h1>Follow Us</h1>
            <FollowUsSection />
            <SSADivider />
        </BoxFixedWidth>
    );
};

export default AshramPage;