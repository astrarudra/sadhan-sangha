// run in console of imgur.com

const images = ["orDhrca.jpg","T3JVUkC.jpg","VuHQwdn.jpg","SQMaf83.jpg","QuCsKXX.jpg","BuysP0T.jpg","suHieWg.jpg","D0lyX7I.jpg","kDAv1Aw.jpg","IqExQjF.jpg","yAvBAHT.jpg","rNlIjWN.jpg","j1xkXbo.jpg","FFHOr60.jpg","mLkr2aH.jpg","dSk6WFk.jpg","SHVhAGZ.jpg","ixHjImq.jpg","B0xcyye.jpg","12dvFLe.jpg","UrtrSHZ.jpg","gbmjpYw.jpg","FdOfWho.jpg","GdAWDO9.jpg","M2hzClt.jpg","tXR9dgk.jpg","PvcyLnx.jpg","KQRsOV3.jpg","UhIPgHE.jpg","ayUdhYT.jpg","ioMdzqT.jpg","gKK5r3J.jpg","fxGIqWl.jpg","HZ1c6wx.jpg","w9kCaaX.jpg","pDKCscy.jpg","Yt8BemL.jpg","DY1M9KK.jpg","cqVOwb3.jpg"]


const BASE = 'https://i.imgur.com/';

// Function to get image dimensions
async function getImageDimensions(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve({ width: img.width, height: img.height });
    img.onerror = reject;
    img.src = url;
  });
}

// Function to generate thumbnail URL
function generateThumbnailUrl(url) {
  const [key, ext] = url.split('.');
  return `${BASE}${key}l.${ext}`;
}

// Asynchronous function to fetch dimensions for all images
async function fetchImageDimensions(images) {
  const dimensions = [];
  const pool = []
  for (const image of images) {
    const thumbnailUrl = generateThumbnailUrl(image);
    pool.push(getImageDimensions(thumbnailUrl))
  }
  const output = await Promise.all(pool)
  for (const [i, image] of images.entries()) {
    const { width, height } = output[i];
    dimensions.push({ i: image, h: height, w: width });
  }
  return dimensions;
}

// Usage
fetchImageDimensions(images)
  .then(dimensions => {
    console.log(dimensions);
    console.log("OUTPUT")
    console.log(JSON.stringify(dimensions))
    // You can use 'dimensions' array here
  })
  .catch(error => console.error('Error fetching image dimensions:', error));