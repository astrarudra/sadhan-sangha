import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Skeleton } from '@mui/material';
import { SSASkeleton } from './UIElements';

const ImgLazy = ({ src, alt, width ="100%", height="100%", bg = 'var(--bg)', onLoad = null, ...props}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the image only once
    threshold: 0.1, // Adjust based on when you want to start loading the image
  });

  return (
    <Box ref={ref} width={width} height={height} position="relative">
      {!imageLoaded && <SSASkeleton width={width} height={height} bg={bg} />}
      {inView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={{ display: imageLoaded ? 'block' : 'none' }}
          onLoad={() => {setImageLoaded(true); if(onLoad) onLoad()}}
          {...props}
        />
      )}
    </Box>
  );
};

export default ImgLazy;
