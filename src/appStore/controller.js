import { GIST, GIT, siteTitle, LOCALSTORE } from "../constants";
import Oxy from "../oxy"
import { loadStateBulk, saveStateBulk } from "./localStorage";
import { useStore } from "./store";
// import lang from '../assets/en.json'
// import bn from '../assets/bn.json'
const { setState, setPageNames } = useStore.getState()

const formatConfig = (configJson) => {
    const {  CONSTS, gallery, primaryImgs } = configJson
    const { albums } = gallery;
    const { imgurBase,  } = CONSTS;
    Object.keys(albums).forEach((key) => {
      albums[key].key = key;
    })
    Object.keys(primaryImgs).forEach(key => {
        const i = primaryImgs[key]
        i.key = key
        i.src = imgurBase + i.src;
        i.alt = i.alt + " - " + siteTitle
        if(i.ratio) i.height = i.width * i.ratio;
    })
    return configJson
}

export const Controller = {
    init: async () => {
        const LS = loadStateBulk([LOCALSTORE.config, LOCALSTORE.en])
        const [config, lang] = [LS[LOCALSTORE.config], LS[LOCALSTORE.en]]
        if(!config || !lang) Controller.loadVersion()
        else {
            setPageNames(lang.pages)
            setState({ config: formatConfig(config), texts: lang, loaded: true })
            console.log('Loaded from Local Storage')
            Controller.syncVersion()
        }
    },
    loadVersion: async () => {
        const { version } = await Oxy.getGist(GIST.version)
        console.log("Loading Version - ", version)
        const [config, lang] = await Promise.all([
            Oxy.getGit(version, GIT.config), 
            Oxy.getGit(version, GIT.english)
        ])
        saveStateBulk({ [LOCALSTORE.config]: config, [LOCALSTORE.en]: lang })
        setPageNames(lang.pages)
        setState({ config: formatConfig(config), texts: lang, loaded: true })
        return version
    },
    syncVersion: async () => {
        const { config: { version : currVersion } } = useStore.getState()
        const { version } = await Oxy.getGist(GIST.version, true)
        if(parseFloat(version) !== parseFloat(currVersion)) {
            console.log('Updating App Version: ', currVersion, '->', version)
            return Controller.loadVersion()
        } else {
            console.log('No Updates - App Version: ', currVersion)
        }
    }
}