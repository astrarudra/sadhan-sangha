import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material';

const PersistedIFrame = ({ id, src, title, ...props }) => {
  const [cached, setCache] = useState(true)

  useEffect(() => {
    const cachedIframe = document.getElementById(`iframe-${id}`);
    console.log(cachedIframe)
    if(!cachedIframe) {
      console.log("I AM HERE")
      if(cached) setCache(false)
      return
    }
    const parent = document.getElementById(`iframe-cache-${id}`);
    if(parent && cachedIframe) {
      console.log("appended")
      parent.appendChild(cachedIframe);
      if(!cached) setCache(true)
    }
    return () => {
      const actualIframe = document.getElementById(`iframe-${id}`);
      const tempContainer = document.getElementById('temp-iframe-container');
      if (tempContainer && actualIframe) {
        tempContainer.appendChild(actualIframe);
      }
    };
  }, [cached]);

  // console.log("RENDERING", iframes, !iframes[id], "SRC-", src)

  return (
    cached ? <Box position="relative" id={`iframe-cache-${id}`} sx={{height: '100%', width: "100%"}}>
    </Box>
    : <Box id={`iframe-${id}`} position="relative" sx={{height: '100%', width: "100%"}}>
      <iframe
        title={title}
        width="100%" height="100%" 
        src={src}
        style={{ border: 'none' }}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        {...props} 
      />
  </Box>
  );
};

export default PersistedIFrame;

