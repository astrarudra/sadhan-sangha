import api from './OxyAPI'

const Oxy = {
    global: {},
    getGist: (gist, useCache = false) => api.getGist(gist, useCache),
    getGit: (version, path) => api.getGit(version, path)
}

export default Oxy