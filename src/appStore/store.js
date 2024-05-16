import { immer } from 'zustand/middleware/immer'
import { loadState, saveState } from './localStorage'
import { createWithEqualityFn  } from 'zustand/traditional'
import configJson from '../assets/config.json'

import HomeIcon from '@mui/icons-material/Home';
import TempleHinduIcon from '@mui/icons-material/TempleHindu';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import CollectionsIcon from '@mui/icons-material/Collections';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const formatConfig = (configJson) => {
  const { gallery } = configJson
  const { albums } = gallery;
  Object.keys(albums).forEach((key) => {
    albums[key].key = key;
  })
  return configJson
}

function shallow(objA, objB) {
    if (Object.is(objA, objB)) {
      return true;
    }
    if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
      return false;
    }
    if (objA instanceof Map && objB instanceof Map) {
      if (objA.size !== objB.size)
        return false;
      for (const [key, value] of objA) {
        if (!Object.is(value, objB.get(key))) {
          return false;
        }
      }
      return true;
    }
    if (objA instanceof Set && objB instanceof Set) {
      if (objA.size !== objB.size)
        return false;
      for (const value of objA) {
        if (!objB.has(value)) {
          return false;
        }
      }
      return true;
    }
    const keysA = Object.keys(objA);
    if (keysA.length !== Object.keys(objB).length) {
      return false;
    }
    for (const keyA of keysA) {
      if (!Object.prototype.hasOwnProperty.call(objB, keyA) || !Object.is(objA[keyA], objB[keyA])) {
        return false;
      }
    }
    return true;
  }

const forLocal = (s) => {
    const { version, darkMode, links, files } = s
    return { version, darkMode, links, files }
}
const storeLocal = (s) => saveState(forLocal(s))

export const useStore = createWithEqualityFn(immer((set) => ({
    version: 1,
    config: formatConfig(configJson),
    pages: {
      ashram: { name: 'Ashram', path: '/ashram', Icon: (p) => <TempleHinduIcon {...p} /> },
      satsang: { name: 'Satsang', path: '/satsang', Icon: (p) => <SelfImprovementIcon {...p} /> },
      gallery: { name: 'Gallery', path: '/gallery', Icon: (p) => <CollectionsIcon {...p} /> },
      contact: { name: 'Contact', path: '/contact', Icon: (p) => <AlternateEmailIcon {...p} /> },
      home: { name: 'Home', path: '/', icon: <HomeIcon /> },
    },
    setState: (payload) => set((s) => {
        console.log(payload, "PAYLOAD: setState")
        Object.keys(payload).forEach((k) => {
            s[k] = payload[k];
        });
    }),
})), shallow);