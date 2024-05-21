import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Box, Skeleton } from '@mui/material';

const IFrameLazy = ({ src, title, width="100%", height="100%", bg='var(--bg)', load=true,  ...props }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box ref={ref} width={width} height={height} position="relative">
      {!iframeLoaded && (
        <Skeleton
          variant="rectangular"
          width={width}
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
      {(load || inView) && (
        <iframe
          src={src}
          title={title}
          width={width}
          height={height}
          style={{ display: iframeLoaded ? 'block' : 'none', border: 0 }}
          allowfullscreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          {...props}
         onLoad={() => setIframeLoaded(true)}
        />
      )}
    </Box>
  );
};

export default IFrameLazy;
