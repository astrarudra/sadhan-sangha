import Oxy from "../oxy"
import { useStore } from "./store";
import config from '../assets/config.json'
import en from '../assets/en.json'
const GIST = {
    version: '589c7ae622999f36a24892f17f677b31',
    config: '687bd615ba1208dd6842a623d15342d8'
}

const formatConfig = (configJson, texts) => {
    const { headers } = texts
    const {  CONSTS, gallery, primaryImgs } = configJson
    const { albums } = gallery;
    const { imgurBase,  } = CONSTS;
    Object.keys(albums).forEach((key) => {
      albums[key].key = key;
    })
    Object.keys(primaryImgs).forEach(key => {
        const i = primaryImgs[key]
        i.src = imgurBase + i.src;
        if(i.display) i.alt = i.display;
        i.alt = i.alt + " - " + headers.title
        if(i.ratio) i.height = i.width * i.ratio;
    })
    return configJson
}

export const Controller = {
    init: async () => {
        const { setState } = useStore.getState()
        const x = await Oxy.getGist(GIST.version)
        console.log("Gist Version", x)
        // const config = await Oxy.getGist(GIST.config)
        // console.log("Gist Config", config)
        console.log("texts", en)
        setState({ config: formatConfig(config, en), texts: en, loaded: true })
    }
}