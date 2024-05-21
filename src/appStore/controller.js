import Oxy from "../oxy"
import { useStore } from "./store";
import config from '../assets/config.json'
const GIST = {
    version: '589c7ae622999f36a24892f17f677b31',
    config: '687bd615ba1208dd6842a623d15342d8'
}

const formatConfig = (configJson) => {
    const { gallery } = configJson
    const { albums } = gallery;
    Object.keys(albums).forEach((key) => {
      albums[key].key = key;
    })
    return configJson
}

export const Controller = {
    init: async () => {
        const { setState } = useStore.getState()
        // const x = await Oxy.getGist(GIST.version)
        // console.log("Gist Version", x)
        // const config = await Oxy.getGist(GIST.config)
        // console.log("Gist Config", config)
        formatConfig(config)
        setState({ config, loaded: true })
    }
}