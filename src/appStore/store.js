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
// const storeLocalPreference = (s) => saveState('ssa-pref', forLocal(s))

export const useStore = createWithEqualityFn(immer((set) => ({
    version: 1,
    config: {},
    texts: {},
    loaded: false,
    imgLoaded: false,
    pages: {
      home: { component: 'Home', path: '/home', Icon: (p) => <HomeIcon {...p}/> },
      ashram: { component: 'Ashram', path: '/ashram', Icon: (p) => <TempleHinduIcon {...p} /> },
      satsang: { component: 'Satsang', path: '/satsang', Icon: (p) => <SelfImprovementIcon {...p} /> },
      gallery: { component: 'Gallery', path: '/gallery', Icon: (p) => <CollectionsIcon {...p} /> },
      contact: { component: 'Contact', path: '/contact', Icon: (p) => <AlternateEmailIcon {...p} /> },
      privacy: { component: 'Privacy', path: '/privacy', Icon: (p) => <AlternateEmailIcon {...p} />, hidden: true },
    },
    setPageNames: (names) => set((s) => {
        Object.keys(names).forEach((k) => {
            s.pages[k].name = names[k];
        });
    }),
    setState: (payload) => set((s) => {
        Object.keys(payload).forEach((k) => {
            s[k] = payload[k];
        });
    }),
})), shallow);