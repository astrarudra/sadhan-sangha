import { immer } from 'zustand/middleware/immer'
// import { loadState, saveState } from './localStorage'
import { createWithEqualityFn  } from 'zustand/traditional'
import { shallow } from 'zustand/shallow'

import HomeIcon from '@mui/icons-material/Home';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CollectionsIcon from '@mui/icons-material/Collections';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

// const forLocal = (s) => {
//     const { version, darkMode, links, files } = s
//     return { version, darkMode, links, files }
// }
// const storeLocal = (s) => saveState(forLocal(s))

export const useStore = createWithEqualityFn(immer((set) => ({
    version: 1,
    config: {},
    texts: {},
    loaded: false,
    imgLoaded: false,
    pages: {
      home: { name: 'Home', path: '/home', Icon: (p) => <HomeIcon {...p}/> },
      ashram: { name: 'Ashram', path: '/ashram', Icon: (p) => <TempleHinduIcon {...p} /> },
      satsang: { name: 'Satsang', path: '/satsang', Icon: (p) => <SelfImprovementIcon {...p} /> },
      gallery: { name: 'Gallery', path: '/gallery', Icon: (p) => <CollectionsIcon {...p} /> },
      contact: { name: 'Contact', path: '/contact', Icon: (p) => <AlternateEmailIcon {...p} /> },
      privacy: { name: 'Privacy', path: '/privacy', Icon: (p) => <AlternateEmailIcon {...p} />, hidden: true },
    },
    setState: (payload) => set((s) => {
        // console.log(payload, "PAYLOAD: setState")
        Object.keys(payload).forEach((k) => {
            s[k] = payload[k];
        });
    }),
})), shallow);