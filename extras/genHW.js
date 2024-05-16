// run in console of imgur.com

const images = ["iHTEf6M.jpg", "Qiyck6J.jpg", "WTkuMAc.jpg", "Xqs7ZeO.jpg", "exmQxKL.jpg", "nq4dnno.jpg", "spRRsHZ.jpg", "h92QQtq.jpg", "JsDAteW.jpg", "OZZHkxU.jpg", "sBAwpBk.jpg", "ZMrS24h.jpg", "9M0kptR.jpg", "nWRxydF.jpg", "gH9U5L8.jpg", "hx3TpbM.jpg"]


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