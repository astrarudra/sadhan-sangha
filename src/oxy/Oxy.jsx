import api from './OxyAPI'

const Oxy = {
    global: {},
    getGist: (gist, useCache = false) => api.getGist(gist, useCache),
    getGit: (path) => api.getGit(path)
}

export default Oxy