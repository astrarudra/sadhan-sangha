import { GIST, GIT, siteTitle, LOCALSTORE } from "../constants";
import Oxy from "../oxy"
import { loadStateBulk, saveStateBulk } from "./localStorage";
import { useStore } from "./store";
// import lang from '../assets/en.json'
// import config from '../assets/config.json'
const { setState, setData, setPageNames } = useStore.getState()

const formatConfig = (configJson) => {
    const {  CONSTS, gallery, primaryImgs } = configJson
    const { albums } = gallery;
    const { gitAssetBase  } = CONSTS;
    Object.keys(albums).forEach((key) => {
      albums[key].key = key;
    })
    Object.keys(primaryImgs).forEach(key => {
        const i = primaryImgs[key]
        i.key = key
        i.src = gitAssetBase + i.src;
        i.alt = i.alt + " - " + siteTitle
        if(i.ratio) i.height = i.width * i.ratio;
    })
    return configJson
}

export const Controller = {
    init: async () => {
        const LS = loadStateBulk([LOCALSTORE.config, LOCALSTORE.en])
        const [config, lang] = [LS[LOCALSTORE.config], LS[LOCALSTORE.en]]
        if(!config || !lang) {
            Controller.loadVersion()
            return {status: 'Local Storage Empty, loadVersion Triggered'}
        }
        else {
            setPageNames(lang.pages)
            setState({ config: formatConfig(config), texts: lang, loaded: true, version: config.version})
            // Controller.syncVersion()
            return {status: 'Loaded from Local Storage'}
        }
    },
    loadVersion: async () => {
        const { version } = await Oxy.getGist(GIST.version)
        console.log("[APPLOAD] Loading Version - ", version)
        const [config, lang] = await Promise.all([
            Oxy.getGit(GIT.config), 
            Oxy.getGit(GIT.english)
        ])
        config.version = version
        saveStateBulk({ [LOCALSTORE.config]: config, [LOCALSTORE.en]: lang })
        setPageNames(lang.pages)
        setState({ config: formatConfig(config), texts: lang, loaded: true, version })
        return {status: 'Loaded Version ', version}
    },
    syncVersion: async () => {
        const { version : currVersion } = useStore.getState()
        const { version } = await Oxy.getGist(GIST.version, true)
        if(version !== currVersion) {
            console.log('[SYNC] Updating App Version: ', currVersion, '->', version)
            Controller.loadVersion()
            return {status: 'Updating Version ', version}
        } else {
            console.log('[SYNC] App Version: ', currVersion, " No Updates Required")
            return {status: 'Version Synced ', version}
        }
    },
    loadPrivacy: async () => {
        const { version, data: { privacy } } = useStore.getState()
        if(privacy) return {status: 'Privacy Already Loaded'}
        const privacyData = await Oxy.getGit(version, GIT.privacy)
        setData({privacy: privacyData})
        console.log("privacy: ", privacy)
        return {status: 'Loaded Privacy'}
    }
}