import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Skeleton } from '@mui/material';

const ImgLazy = ({ src, alt, width ="100%", height="100%", bg = 'var(--bg)', onLoad = null, ...props}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Load the image only once
    threshold: 0.1, // Adjust based on when you want to start loading the image
  });

  return (
    <Box ref={ref} width={width} height={height} position="relative">
      {!imageLoaded && (
        <Skeleton
        //   sx={{ bgcolor: 'grey.900' }}
          variant="rectangular"
          width={width}
          bg-colot="white"
          height={height}
          animation="wave"
          sx={{
            opacity: 0.3,
            background: bg,
            '::after': {
                background: 'linear-gradient(90deg, transparent, #ffffff8a, transparent)',
            }
          }}
        />
      )}
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
