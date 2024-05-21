export const drawerWidth = 240;

export const ytList = 'https://www.youtube.com/playlist?list='
export const ytEmbed = 'https://www.youtube.com/embed/'

const w1 = 335;
const w2 = 355;
const w3 = 310;
const w4 = 1000;

export const imgurBase = 'https://i.imgur.com/'
const imgurImageDef = {
    boroGuruji: "bDYaUzj.jpg",
    guruji: 'ZJjJmFy.jpg',
    mataji: 'FvHmucT.jpg',
    ashram: '6mtCET0.jpg',
    bwGuruji: "Z6TyTjK.png",
    shiva: 'FWqdf8z.png',
}

export const imgurImages = Object.keys(imgurImageDef).reduce((acc, key) => {
    acc[key] = imgurBase + imgurImageDef[key];
    return acc;
}, {})

export const primaryImgs = {
    guruji: {
        src: imgurImages.guruji,
        alt: "Guruji",
        height: w1 * 1.29,
        width: w1,
        bg: 'radial-gradient(circle, rgba(252,192,156,1) 40%, rgba(200,57,61,1) 80%)'
    },
    boroGuruji: {
        src: imgurImages.boroGuruji,
        alt: "Param Guruji",
        height: w2 * 1.29,
        width: w2,
        bg: 'radial-gradient(circle, #ffe8e8 20%, #af2a84 80%)'
    },
    mataji: {
        src: imgurImages.mataji,
        alt: "Mataji",
        height: w3 * 1.29,
        width: w3,
        bg: 'radial-gradient(circle, #d5562e 40%, #ffb5c2 80%)'
    },
    ashram: {
        src: imgurImages.ashram,
        alt: "Ashram - Sadhan Sangha Ashram",
        height: w4 * 0.57,
        width: w4,
        bg: 'linear-gradient(180deg, #ffffff 0%, #a14a4c 70%)'
    }
}

export const socialLinks = {
    "fb": {"i": "logos:facebook",  "n": "Facebook", "n2": "FB", "l": "https://facebook.com/SadhanSangha"},
    "yt": {"i": "logos:youtube-icon", "n": "Youtube", "n2": "YT", "l": "https://youtube.com/@SadhanSangha"},
    "sp": {"i": "logos:spotify-icon", "n": "Spotify", "n2": "SP", "l": "https://open.spotify.com/show/2ZObyJtMT9202nOOIazkmv"},
    "ap": {"i": "simple-icons:prime", "n": "Amazon Music", "n2": "Music", "l":"https://music.amazon.in/podcasts/4e808bb9-cbf0-4fd8-8d83-b0c16e67980b"}
}

export const contactDetails = {
    "location": "Sadhan Sangha Ashram, Haridwar Road, Veerbhadra, Rishikesh, Uttarakhand 249202",
    "gmap": "https://maps.app.goo.gl/fmuSMohkJcgPf7YR7",
    "phone": "+91 135 2452522", 
    "email": "contact@sadhansangha.org",
    "gmapEmbed": "https://google.com/maps/embed?pb=!1m14!1m8!1m3!1d6905.53012522406!2d78.2485447!3d30.0722681!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093f52f2fccf5d%3A0x800ed8e1721cf8c6!2sSadhan%20Sangha%20Ashram!5e0!3m2!1sen!2sin!4v1715953540617!5m2!1sen!2sin",
    "gmapEmbedTitle": 'Saghan Sangha Ashram Location Google Map',
}

export const primaryInfo = {
    "title": "Sadhan Sangha Ashram",
    "shortTitle": "Sadhan Sangha",
    "sections": {
        "ashram": "Ashram",
        "satsang": "Satsang",
        "follow": "Follow Us",
    },
}

export const CONSTS = {
    "ytPList": "https://youtube.com/playlist?list=",
    "ytEmbed": "https://youtube.com/embed/",
    "imgurBase": "https://i.imgur.com/",
    "spotifyPL": "https://open.spotify.com/embed/show/2ZObyJtMT9202nOOIazkmv?utm_source=generator&theme=0",
    "spotifyPLTitle": "Spotify Satsang Playlist",
}